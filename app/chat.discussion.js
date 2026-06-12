// 私人研讨区模块：负责聊天 UI、LLM 配置与本地记忆（IndexedDB）
window.PrivateDiscussionChat = (function () {
  const CHAT_HISTORY_KEY = 'dpr_chat_history_v1'; // 仅用于旧版本迁移
  const CHAT_DB_NAME = 'dpr_chat_db_v1';
  const CHAT_STORE_NAME = 'paper_chats';
  const CHAT_MODEL_PREF_KEY = 'dpr_chat_model_preference_v1';
  const CHAT_DRAWER_WIDTH_KEY = 'dpr_chat_drawer_width_v1';
  const CHAT_DRAWER_MIN_WIDTH = 340;
  const CHAT_DRAWER_MAX_WIDTH = 860;
  const CHAT_DRAWER_DRAG_THRESHOLD = 4;
  const CHAT_SYNC_SUCCESS_COLOR = '#0f766e';
  const CHAT_SYNC_ERROR_COLOR = '#c00';
  let remoteChatDbCache = null;
  let remoteChatDbLoadedPath = '';

  // 最近提问记录（仅本机 localStorage，从现在开始记录，不回溯历史聊天内容）
  const QUESTION_RECENT_KEY = 'dpr_chat_recent_questions_v1';
  const QUESTION_PINNED_KEY = 'dpr_chat_pinned_questions_v1';
  const MAX_RECENT_QUESTIONS = 10; // 展示与保存都只保留最近 10 个（用户诉求）
  const MAX_PINNED_QUESTIONS = 50; // 防止无限增长
  const QUICK_QUESTIONS_KEY = 'dpr_chat_quick_questions_v1';
  const MAX_QUICK_QUESTIONS = 8;
  const DEFAULT_QUICK_QUESTIONS = Object.freeze([
    '这篇论文的核心贡献是什么？',
    '方法相比已有工作新在哪里？',
    '对我的研究有什么启发？',
    '你认为存在哪些局限性和改进方向？',
  ]);

  // 读取用户偏好的 Chat 模型名称（跨页面生效）
  const loadPreferredModelName = () => {
    try {
      if (!window.localStorage) return '';
      const v = window.localStorage.getItem(CHAT_MODEL_PREF_KEY);
      return typeof v === 'string' ? v : '';
    } catch {
      return '';
    }
  };

  // 保存用户偏好的 Chat 模型名称
  const savePreferredModelName = (name) => {
    try {
      if (!window.localStorage) return;
      const v = (name || '').trim();
      if (!v) return;
      window.localStorage.setItem(CHAT_MODEL_PREF_KEY, v);
    } catch {
      // ignore
    }
  };

  const normalizeQuickQuestions = (items) => {
    const seen = new Set();
    const normalized = [];
    (Array.isArray(items) ? items : []).forEach((item) => {
      const q = String(item || '').trim();
      if (!q || seen.has(q)) return;
      seen.add(q);
      normalized.push(q);
    });
    return normalized.slice(0, MAX_QUICK_QUESTIONS);
  };

  const getQuickQuestions = () => {
    try {
      if (!window.localStorage) return DEFAULT_QUICK_QUESTIONS.slice();
      const raw = window.localStorage.getItem(QUICK_QUESTIONS_KEY);
      if (!raw) return DEFAULT_QUICK_QUESTIONS.slice();
      const parsed = JSON.parse(raw);
      const normalized = normalizeQuickQuestions(parsed);
      return normalized.length ? normalized : DEFAULT_QUICK_QUESTIONS.slice();
    } catch {
      return DEFAULT_QUICK_QUESTIONS.slice();
    }
  };

  const saveQuickQuestions = (items) => {
    const normalized = normalizeQuickQuestions(items);
    const value = normalized.length ? normalized : DEFAULT_QUICK_QUESTIONS.slice();
    try {
      if (window.localStorage) {
        window.localStorage.setItem(QUICK_QUESTIONS_KEY, JSON.stringify(value));
      }
    } catch {
      // ignore
    }
    return value;
  };

  const resetQuickQuestions = () => {
    try {
      if (window.localStorage) {
        window.localStorage.removeItem(QUICK_QUESTIONS_KEY);
      }
    } catch {
      // ignore
    }
    return DEFAULT_QUICK_QUESTIONS.slice();
  };

  // 从 secret.private 解密结果中生成可用的 Chat 模型列表
  const getChatLLMConfig = () => {
    const secret = window.decoded_secret_private || {};
    const utils = window.DPRLLMConfigUtils || {};
    if (typeof utils.resolveChatModels === 'function') {
      return utils.resolveChatModels(secret);
    }

    const chatList = Array.isArray(secret.chatLLMs) ? secret.chatLLMs : [];
    const models = [];
    chatList.forEach((item) => {
      if (!item || !item.models || !Array.isArray(item.models)) return;
      const baseUrl = (item.baseUrl || '').trim();
      const apiKey = (item.apiKey || '').trim();
      item.models.forEach((m) => {
        const name = (m || '').trim();
        if (!name || !apiKey || !baseUrl) return;
        models.push({
          name,
          apiKey,
          baseUrl,
        });
      });
    });
    return models;
  };
  const inferChatApiProfile = (baseUrl, model) => {
    const utils = window.DPRLLMConfigUtils || {};
    if (typeof utils.inferChatApiProfile === 'function') {
      return utils.inferChatApiProfile(baseUrl, model);
    }
    const normalizedBaseUrl = String(baseUrl || '').trim().toLowerCase();
    const normalizedModel = String(model || '').trim().toLowerCase();
    if (
      /(^|\/\/)(api\.)?deepseek\.com(?:$|\/)/i.test(normalizedBaseUrl)
      || normalizedModel.startsWith('deepseek-')
    ) {
      return 'deepseek';
    }
    return 'generic-openai';
  };
  const buildStreamingChatPayload = (baseUrl, model, messages) => {
    const utils = window.DPRLLMConfigUtils || {};
    if (typeof utils.buildStreamingChatPayload === 'function') {
      return utils.buildStreamingChatPayload({ baseUrl, model, messages });
    }
    return {
      model,
      messages,
      stream: true,
    };
  };

  let chatDbPromise = null;

  const openChatDB = () => {
    if (chatDbPromise) return chatDbPromise;
    if (typeof indexedDB === 'undefined') {
      chatDbPromise = Promise.resolve(null);
      return chatDbPromise;
    }
    chatDbPromise = new Promise((resolve) => {
      try {
        const req = indexedDB.open(CHAT_DB_NAME, 1);
        req.onupgradeneeded = (event) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains(CHAT_STORE_NAME)) {
            db.createObjectStore(CHAT_STORE_NAME, { keyPath: 'paperId' });
          }
        };
        req.onsuccess = (event) => {
          const db = event.target.result;
          // 迁移旧版 localStorage 聊天记录
          try {
            if (window.localStorage) {
              const raw = window.localStorage.getItem(CHAT_HISTORY_KEY);
              if (raw) {
                const obj = JSON.parse(raw) || {};
                const tx = db.transaction(CHAT_STORE_NAME, 'readwrite');
                const store = tx.objectStore(CHAT_STORE_NAME);
                Object.keys(obj).forEach((pid) => {
                  const list = obj[pid];
                  if (pid && Array.isArray(list)) {
                    store.put({ paperId: pid, messages: list });
                  }
                });
                tx.oncomplete = () => {
                  window.localStorage.removeItem(CHAT_HISTORY_KEY);
                };
              }
            }
          } catch {
            // ignore
          }
          resolve(db);
        };
        req.onerror = () => resolve(null);
      } catch {
        resolve(null);
      }
    });
    return chatDbPromise;
  };

  const loadChatHistory = async (paperId) => {
    if (!paperId) return [];
    const db = await openChatDB();
    if (!db) {
      try {
        if (!window.localStorage) return [];
        const raw = window.localStorage.getItem(CHAT_HISTORY_KEY);
        if (!raw) return [];
        const obj = JSON.parse(raw);
        if (!obj || typeof obj !== 'object') return [];
        const list = obj[paperId];
        return Array.isArray(list) ? list : [];
      } catch {
        return [];
      }
    }
    return new Promise((resolve) => {
      try {
        const tx = db.transaction(CHAT_STORE_NAME, 'readonly');
        const store = tx.objectStore(CHAT_STORE_NAME);
        const req = store.get(paperId);
        req.onsuccess = () => {
          const record = req.result;
          if (record && Array.isArray(record.messages)) {
            resolve(record.messages);
          } else {
            resolve([]);
          }
        };
        req.onerror = () => resolve([]);
      } catch {
        resolve([]);
      }
    });
  };

  const saveChatHistory = async (paperId, list) => {
    if (!paperId) return;
    const db = await openChatDB();
    if (!db) {
      try {
        if (!window.localStorage) return;
        const raw = window.localStorage.getItem(CHAT_HISTORY_KEY);
        const obj = raw ? JSON.parse(raw) || {} : {};
        obj[paperId] = list;
        window.localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(obj));
      } catch {
        // ignore
      }
      return;
    }
    try {
      const tx = db.transaction(CHAT_STORE_NAME, 'readwrite');
      const store = tx.objectStore(CHAT_STORE_NAME);
      store.put({ paperId, messages: list });
    } catch {
      // ignore
    }
  };

  const getChatSyncUtils = () => window.DPRChatSyncUtils || null;

  const setChatStatus = (message, color = '') => {
    const statusEl = document.getElementById('chat-status');
    if (!statusEl) return;
    statusEl.textContent = message || '';
    statusEl.style.color = color || '';
  };

  const canAttemptRemoteChatSync = () =>
    String(window.DPR_ACCESS_MODE || '').toLowerCase() === 'full'
    && window.SubscriptionsGithubToken
    && typeof window.SubscriptionsGithubToken.loadRepoTextFile === 'function'
    && typeof window.SubscriptionsGithubToken.commitRepoChanges === 'function';

  const getReaderDatabaseConfig = async ({ create = false } = {}) => {
    const session = window.DPRSecretSession || {};
    if (create && typeof session.ensureReaderDatabaseConfig === 'function') {
      return await session.ensureReaderDatabaseConfig();
    }
    if (typeof session.getReaderDatabaseConfig === 'function') {
      return session.getReaderDatabaseConfig();
    }
    const secret = window.decoded_secret_private || {};
    return secret && typeof secret.reader_database === 'object'
      ? secret.reader_database
      : null;
  };

  const resolveRemoteChatConfig = async ({ create = false } = {}) => {
    if (!canAttemptRemoteChatSync()) return null;
    const utils = getChatSyncUtils();
    if (!utils || typeof utils.deriveChatDbPath !== 'function') return null;
    const readerCfg = await getReaderDatabaseConfig({ create });
    if (!readerCfg || readerCfg.enabled === false || !readerCfg.key_b64) return null;
    return {
      path: utils.deriveChatDbPath(readerCfg.path),
      key_b64: String(readerCfg.key_b64 || '').trim(),
    };
  };

  const loadRemoteChatDatabase = async (cfg, { force = false } = {}) => {
    const utils = getChatSyncUtils();
    if (!utils) throw new Error('聊天同步工具未加载。');
    const path = cfg && cfg.path ? cfg.path : utils.deriveChatDbPath();
    if (!force && remoteChatDbCache && remoteChatDbLoadedPath === path) {
      return remoteChatDbCache;
    }
    const api = window.SubscriptionsGithubToken;
    let database = null;
    try {
      const file = await api.loadRepoTextFile(path, { requireWorkflow: false });
      const encrypted = JSON.parse(file.content || '{}');
      database = await utils.decryptChatDatabase(encrypted, cfg.key_b64);
    } catch (err) {
      const msg = String((err && err.message) || err || '');
      if (!msg.includes('HTTP 404')) throw err;
      database = utils.emptyChatDatabase();
    }
    remoteChatDbCache = database;
    remoteChatDbLoadedPath = path;
    return database;
  };

  const loadRemoteChatHistory = async (paperId, { force = false } = {}) => {
    try {
      const utils = getChatSyncUtils();
      const cfg = await resolveRemoteChatConfig({ create: false });
      if (!utils || !cfg) return [];
      const database = await loadRemoteChatDatabase(cfg, { force });
      return utils.getChatMessages(database, paperId);
    } catch (err) {
      console.warn('[DPR CHAT] 加载仓库会话失败：', err);
      return [];
    }
  };

  const fetchRemoteChatHistoryStrict = async (paperId) => {
    if (!canAttemptRemoteChatSync()) {
      throw new Error('请先解锁密钥，并确认已配置可读取仓库的 GitHub Token。');
    }
    const utils = getChatSyncUtils();
    if (!utils) throw new Error('聊天同步工具未加载。');
    const cfg = await resolveRemoteChatConfig({ create: false });
    if (!cfg || !cfg.key_b64) {
      throw new Error('未找到 reader database 加密配置，无法读取远程会话。');
    }
    const database = await loadRemoteChatDatabase(cfg, { force: true });
    return utils.getChatMessages(database, paperId);
  };

  const loadChatHistoryWithRemote = async (paperId) => {
    const local = await loadChatHistory(paperId);
    if (local && local.length) return local;
    const remote = await loadRemoteChatHistory(paperId);
    if (remote && remote.length) {
      await saveChatHistory(paperId, remote);
      setChatStatus('已从仓库加载同步会话。', CHAT_SYNC_SUCCESS_COLOR);
      return remote;
    }
    return local || [];
  };

  const syncChatHistoryToRepo = async (paperId) => {
    if (!canAttemptRemoteChatSync()) {
      throw new Error('请先解锁密钥，并确认已配置可写入仓库的 GitHub Token。');
    }
    const utils = getChatSyncUtils();
    if (!utils) throw new Error('聊天同步工具未加载。');
    const history = await loadChatHistory(paperId);
    if (!history || !history.length) {
      throw new Error('当前论文还没有可同步的会话。');
    }
    const cfg = await resolveRemoteChatConfig({ create: true });
    if (!cfg || !cfg.key_b64) {
      throw new Error('未找到 reader database 加密配置，无法安全同步会话。');
    }
    const database = await loadRemoteChatDatabase(cfg, { force: true });
    const nowIso = new Date().toISOString();
    const nextDatabase = utils.setChatMessages(database, paperId, history, nowIso);
    const encrypted = await utils.encryptChatDatabase(nextDatabase, cfg.key_b64, cfg.path);
    const safeSlug =
      String(paperId || 'paper')
        .split('/')
        .pop()
        .replace(/[^A-Za-z0-9_.-]+/g, '-')
        .replace(/^-+|-+$/g, '')
      || 'paper';
    const result = await window.SubscriptionsGithubToken.commitRepoChanges(
      {
        updates: [
          {
            path: cfg.path,
            content: `${JSON.stringify(encrypted, null, 2)}\n`,
          },
        ],
        deletes: [],
      },
      `chore: sync chat history for ${safeSlug}`,
      { requireWorkflow: false },
    );
    remoteChatDbCache = nextDatabase;
    remoteChatDbLoadedPath = cfg.path;
    return {
      path: cfg.path,
      count: history.length,
      branch: result && result.branch,
      commit: result && result.commit,
    };
  };

  const handleSyncChatClick = async (paperId) => {
    const btn = document.getElementById('chat-sync-btn');
    const previousText = btn ? btn.textContent : '';
    if (btn) {
      btn.disabled = true;
      btn.textContent = '同步中';
    }
    setChatStatus('正在加密并同步会话到仓库...', '#666');
    try {
      const result = await syncChatHistoryToRepo(paperId);
      const suffix = result && result.branch ? `（${result.branch}）` : '';
      setChatStatus(`已同步 ${result.count} 条会话到仓库${suffix}。`, CHAT_SYNC_SUCCESS_COLOR);
    } catch (err) {
      setChatStatus(`同步失败：${(err && err.message) || err}`, CHAT_SYNC_ERROR_COLOR);
    } finally {
      if (btn) {
        btn.disabled = String(window.DPR_ACCESS_MODE || '').toLowerCase() !== 'full';
        btn.textContent = previousText || '同步';
      }
    }
  };

  const handlePullRemoteChatClick = async (paperId) => {
    const btn = document.getElementById('chat-pull-remote-btn');
    const previousText = btn ? btn.textContent : '';
    const local = await loadChatHistory(paperId);
    if (local && local.length) {
      const ok = window.confirm(
        '这会清空当前论文的本地对话，并用仓库里的远程会话覆盖。未同步的本地内容会丢失，继续吗？',
      );
      if (!ok) return;
    }
    if (btn) {
      btn.disabled = true;
      btn.textContent = '拉取中';
    }
    setChatStatus('正在读取远程会话...', '#666');
    try {
      const remote = await fetchRemoteChatHistoryStrict(paperId);
      await saveChatHistory(paperId, remote);
      await renderHistory(paperId);
      if (remote && remote.length) {
        setChatStatus(`已清空本地并拉取 ${remote.length} 条远程会话。`, CHAT_SYNC_SUCCESS_COLOR);
      } else {
        setChatStatus('远程没有会话；本地对话已清空。', CHAT_SYNC_SUCCESS_COLOR);
      }
    } catch (err) {
      setChatStatus(`拉取失败：${(err && err.message) || err}`, CHAT_SYNC_ERROR_COLOR);
    } finally {
      if (btn) {
        btn.disabled = String(window.DPR_ACCESS_MODE || '').toLowerCase() !== 'full';
        btn.textContent = previousText || '拉取';
      }
    }
  };

  const renderChatUI = () => {
    return `
      <div id="paper-chat-container" class="paper-chat-drawer">
        <button id="paper-chat-toggle-btn" class="paper-chat-toggle-btn" type="button" aria-controls="paper-chat-panel" aria-expanded="false">
          <span class="paper-chat-toggle-dot" aria-hidden="true"></span>
          <span>AI \u95ee\u7b54</span>
        </button>
        <aside id="paper-chat-panel" class="paper-chat-panel" aria-hidden="true" aria-label="\u8bba\u6587 AI \u95ee\u7b54">
          <div class="paper-chat-panel-head">
            <div class="paper-chat-title"><span class="paper-chat-title-icon" aria-hidden="true">✦</span><span>Paper Copilot</span></div>
            <div class="paper-chat-head-actions">
              <button id="paper-chat-fullscreen-btn" class="paper-chat-fullscreen-btn" type="button" aria-label="\u5168\u5c4f\u663e\u793a AI \u95ee\u7b54" title="\u5168\u5c4f" aria-pressed="false">
                <span class="paper-chat-fullscreen-icon" aria-hidden="true"></span>
              </button>
              <button id="paper-chat-close-btn" class="paper-chat-close-btn" type="button" aria-label="\u5173\u95ed AI \u95ee\u7b54">&times;</button>
            </div>
          </div>
          <div class="paper-chat-panel-body">
            <div id="chat-history"></div>
            <div class="input-area">
              <textarea id="user-input" rows="1" placeholder="\u9488\u5bf9\u8fd9\u7bc7\u8bba\u6587\u63d0\u95ee\uff0c\u4ec5\u81ea\u5df1\u53ef\u89c1..."></textarea>
              <div class="chat-input-toolbar">
                <select id="chat-llm-model-select" class="chat-model-select"></select>
                <div class="chat-input-actions">
                  <button id="chat-quick-questions-toggle-btn" class="chat-quick-questions-toggle-btn" type="button" title="\u5feb\u6377\u95ee\u9898">\u5feb\u6377</button>
                  <button id="chat-pull-remote-btn" class="chat-pull-remote-btn" type="button" title="\u6e05\u7a7a\u672c\u5730\u5bf9\u8bdd\u5e76\u62c9\u53d6\u8fdc\u7a0b\u4f1a\u8bdd">\u62c9\u53d6</button>
                  <button id="chat-sync-btn" class="chat-sync-btn" type="button" title="\u52a0\u5bc6\u540c\u6b65\u4f1a\u8bdd\u5230\u4ed3\u5e93">\u540c\u6b65</button>
                  <button id="send-btn">\u53d1\u9001</button>
                </div>
              </div>
              <span id="chat-status" class="chat-status" aria-live="polite"></span>
            </div>
            <div id="chat-quick-questions-panel" class="chat-quick-questions-panel" style="display:none"></div>
            <div id="chat-questions-panel" class="chat-questions-panel" style="display:none"></div>
            <div id="chat-quick-run-modal" class="chat-quick-run-modal" aria-hidden="true">
              <div class="chat-quick-run-modal-panel">
                <div class="chat-quick-run-modal-head">
                  <div class="chat-quick-run-title">\u5feb\u901f\u6293\u53d6</div>
                  <button id="chat-quick-run-close-btn" class="chat-quick-run-close-btn" type="button" aria-label="\u5173\u95ed">&times;</button>
                </div>
                <button id="chat-quick-run-today-btn" class="chat-quick-run-item" type="button">\u7acb\u5373\u751f\u6210\u4eca\u65e5\u65e5\u62a5</button>
                <button id="chat-quick-run-10d-btn" class="chat-quick-run-item" type="button">\u7acb\u5373\u641c\u5bfb\u5341\u5929\u5185\u8bba\u6587</button>
                <button id="chat-quick-run-30d-btn" class="chat-quick-run-item" type="button">\u7acb\u5373\u641c\u5bfb\u4e09\u5341\u5929\u5185\u8bba\u6587</button>
                <div class="chat-quick-run-divider" aria-hidden="true"></div>
                <div class="chat-quick-run-title">\u4f1a\u8bae\u8bba\u6587\uff08\u6682\u672a\u63a5\u5165\uff09</div>
                <div class="chat-quick-run-row">
                  <label for="chat-quick-run-year-select">\u5e74\u4efd</label>
                  <select id="chat-quick-run-year-select">
                    <option value="">\u9009\u62e9\u5e74\u4efd</option>
                  </select>
                </div>
                <div class="chat-quick-run-row">
                  <label for="chat-quick-run-conference-select">\u4f1a\u8bae\u540d</label>
                  <select id="chat-quick-run-conference-select">
                    <option value="">\u9009\u62e9\u4f1a\u8bae\u540d</option>
                  </select>
                </div>
                <button id="chat-quick-run-conference-run-btn" class="chat-quick-run-run-btn" type="button">\u8fd0\u884c</button>
                <div id="chat-quick-run-conference-msg" class="chat-quick-run-msg"></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    `;
  };

  const QUICK_RUN_CONFERENCES = [
    'ACL',
    'AAAI',
    'COLING',
    'EMNLP',
    'ICCV',
    'ICLR',
    'ICML',
    'IJCAI',
    'NeurIPS',
    'SIGIR',
  ];

  const fillQuickRunOptions = (yearSelectEl, confSelectEl) => {
    if (yearSelectEl && !yearSelectEl._dprQuickRunOptionsFilled) {
      yearSelectEl._dprQuickRunOptionsFilled = true;
      const currentYear = new Date().getFullYear();
      for (let y = currentYear; y >= currentYear - 8; y -= 1) {
        const opt = document.createElement('option');
        opt.value = String(y);
        opt.textContent = String(y);
        yearSelectEl.appendChild(opt);
      }
    }

    if (confSelectEl && !confSelectEl._dprQuickRunOptionsFilled) {
      confSelectEl._dprQuickRunOptionsFilled = true;
      QUICK_RUN_CONFERENCES.forEach((name) => {
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        confSelectEl.appendChild(opt);
      });
    }
  };

  const resolveQuickRunYear = (value) => {
    const y = parseInt(value, 10);
    if (!Number.isFinite(y) || y <= 0) {
      return '';
    }
    return String(y);
  };

  const runQuickFetch = (days, statusEl, showToast = () => {}, options = null) => {
    if (!window.DPRWorkflowRunner || typeof window.DPRWorkflowRunner.runQuickFetchByDays !== 'function') {
      if (statusEl) {
        statusEl.textContent = '工作流触发器未加载到当前页面。';
        statusEl.style.color = '#c00';
      }
      return;
    }
    window.DPRWorkflowRunner.runQuickFetchByDays(days, options || undefined);
    showToast();
  };

  const runQuickConferencePlaceholder = (yearSelectEl, confSelectEl, msgEl, statusEl) => {
    const year = resolveQuickRunYear(yearSelectEl ? yearSelectEl.value : '');
    const conf = confSelectEl ? String(confSelectEl.value || '').trim() : '';
    if (!year || !conf) {
      if (msgEl) {
        msgEl.textContent = '请先选择年份和会议名。';
        msgEl.style.color = '#c00';
      }
      return;
    }
    if (msgEl) {
      msgEl.textContent = `${year} ${conf} 的会议论文抓取功能暂未接入。`;
      msgEl.style.color = '#c90';
    }
    if (statusEl) {
      statusEl.textContent = `${year} ${conf} 的会议论文抓取入口先保留。`;
      statusEl.style.color = '#c90';
    }
  };

  const getQuickRunModal = () => document.getElementById('chat-quick-run-modal');

  const safeLoadList = (key) => {
    try {
      if (!window.localStorage) return [];
      const raw = window.localStorage.getItem(key);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr.filter((x) => typeof x === 'string') : [];
    } catch {
      return [];
    }
  };

  const safeSaveList = (key, list) => {
    try {
      if (!window.localStorage) return;
      window.localStorage.setItem(key, JSON.stringify(list || []));
    } catch {
      // ignore
    }
  };

  const normalizeQuestion = (text) => {
    const s = String(text || '')
      .replace(/\s+/g, ' ')
      .trim();
    if (!s) return '';
    // 防止异常超长内容把 UI 撑爆
    if (s.length > 500) return s.slice(0, 500);
    return s;
  };

  const getPinnedQuestions = () => safeLoadList(QUESTION_PINNED_KEY);
  const setPinnedQuestions = (list) =>
    safeSaveList(QUESTION_PINNED_KEY, (list || []).slice(0, MAX_PINNED_QUESTIONS));

  const getRecentQuestions = () => safeLoadList(QUESTION_RECENT_KEY);
  const setRecentQuestions = (list) =>
    safeSaveList(QUESTION_RECENT_KEY, (list || []).slice(0, MAX_RECENT_QUESTIONS));

  let quickRunPanelController = null;

  const recordRecentQuestion = (question) => {
    const q = normalizeQuestion(question);
    if (!q) return;

    const pinned = getPinnedQuestions();
    // 已钉住的就不再重复进入 recent（避免重复）
    if (pinned.includes(q)) return;

    const recent = getRecentQuestions().filter((x) => x !== q);
    recent.unshift(q);
    setRecentQuestions(recent);
  };

  const togglePinQuestion = (question) => {
    const q = normalizeQuestion(question);
    if (!q) return;
    const pinned = getPinnedQuestions();
    const idx = pinned.indexOf(q);
    if (idx >= 0) {
      pinned.splice(idx, 1);
      setPinnedQuestions(pinned);
      return;
    }

    pinned.unshift(q);
    setPinnedQuestions(pinned);
    // 钉住后从 recent 移除（保证“置顶 + recent 仍展示 10 个其它问题”）
    const recent = getRecentQuestions().filter((x) => x !== q);
    setRecentQuestions(recent);
  };

  const getChatRoot = () => {
    const el = document.getElementById('paper-chat-container');
    return el || null;
  };

  let chatDrawerOpen = false;
  let chatDrawerFullscreen = false;
  let chatDrawerEscBound = false;
  let chatDrawerResizeBound = false;
  let chatDrawerDragState = null;

  const getChatDrawerMaxWidth = () =>
    Math.max(
      CHAT_DRAWER_MIN_WIDTH,
      Math.min(CHAT_DRAWER_MAX_WIDTH, window.innerWidth - 32),
    );

  const clampChatDrawerWidth = (width) => {
    const num = Number(width);
    if (!Number.isFinite(num)) return null;
    return Math.round(
      Math.max(CHAT_DRAWER_MIN_WIDTH, Math.min(getChatDrawerMaxWidth(), num)),
    );
  };

  const loadChatDrawerWidth = () => {
    try {
      if (!window.localStorage) return null;
      return clampChatDrawerWidth(window.localStorage.getItem(CHAT_DRAWER_WIDTH_KEY));
    } catch {
      return null;
    }
  };

  const saveChatDrawerWidth = (width) => {
    const clamped = clampChatDrawerWidth(width);
    if (!clamped) return null;
    try {
      if (window.localStorage) {
        window.localStorage.setItem(CHAT_DRAWER_WIDTH_KEY, String(clamped));
      }
    } catch {
      // ignore
    }
    return clamped;
  };

  const applyChatDrawerWidth = (width, options = {}) => {
    const clamped = clampChatDrawerWidth(width);
    if (!clamped) return null;
    document.documentElement.style.setProperty('--dpr-chat-drawer-width', `${clamped}px`);
    if (options.persist !== false) saveChatDrawerWidth(clamped);
    return clamped;
  };

  const getCurrentChatDrawerWidth = () => {
    const root = getChatRoot();
    const panel = root && root.querySelector('#paper-chat-panel');
    if (panel) {
      const rect = panel.getBoundingClientRect();
      if (rect && rect.width) return clampChatDrawerWidth(rect.width);
    }
    return loadChatDrawerWidth() || clampChatDrawerWidth(432);
  };

  const removeChatArtifacts = () => {
    document.querySelectorAll('#paper-chat-container').forEach((el) => {
      try {
        el.remove();
      } catch {
        // ignore
      }
    });
    document.querySelectorAll('#chat-quick-run-modal').forEach((el) => {
      try {
        el.remove();
      } catch {
        // ignore
      }
    });
    document.querySelectorAll('.chat-quote-popover').forEach((el) => {
      try {
        el.remove();
      } catch {
        // ignore
      }
    });
  };

  const setChatDrawerOpen = (open, options = {}) => {
    const nextOpen = !!open;
    chatDrawerOpen = nextOpen;

    if (document.body && document.body.classList) {
      document.body.classList.toggle('dpr-chat-drawer-open', nextOpen);
    }

    const root = getChatRoot();
    if (!root) return;
    root.classList.toggle('is-open', nextOpen);
    root.setAttribute('data-open', nextOpen ? '1' : '0');

    const panel = root.querySelector('#paper-chat-panel');
    if (panel) {
      panel.setAttribute('aria-hidden', nextOpen ? 'false' : 'true');
      panel.style.opacity = nextOpen ? '1' : '0';
      panel.style.transform = nextOpen
        ? 'translateX(0)'
        : 'translateX(calc(100% + 48px))';
    }

    const toggleBtn = root.querySelector('#paper-chat-toggle-btn');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
      toggleBtn.title = nextOpen ? 'Hide AI chat' : 'Show AI chat';
    }

    if (!nextOpen) {
      setChatDrawerFullscreen(false);
      closeQuestionsPanel(root);
      closeQuickQuestionsPanel(root);
      hideChatQuotePopover();
      return;
    }

    if (options.focusInput) {
      setTimeout(() => {
        const input = root.querySelector('#user-input');
        if (input && !input.disabled) input.focus();
      }, 220);
    }
  };

  const setChatDrawerFullscreen = (fullscreen) => {
    const nextFullscreen = !!fullscreen;
    chatDrawerFullscreen = nextFullscreen;
    if (document.body && document.body.classList) {
      document.body.classList.toggle('dpr-chat-drawer-fullscreen', nextFullscreen);
    }
    const root = getChatRoot();
    if (!root) return;
    root.classList.toggle('is-fullscreen', nextFullscreen);
    root.setAttribute('data-fullscreen', nextFullscreen ? '1' : '0');
    const btn = root.querySelector('#paper-chat-fullscreen-btn');
    if (btn) {
      btn.setAttribute('aria-pressed', nextFullscreen ? 'true' : 'false');
      btn.setAttribute(
        'aria-label',
        nextFullscreen ? '退出全屏 AI 问答' : '全屏显示 AI 问答',
      );
      btn.title = nextFullscreen ? '退出全屏' : '全屏';
    }
  };

  const bindChatDrawerEventsOnce = (root) => {
    if (!root) return;

    const toggleBtn = root.querySelector('#paper-chat-toggle-btn');
    if (toggleBtn && !toggleBtn._boundChatDrawerToggle) {
      toggleBtn._boundChatDrawerToggle = true;
      toggleBtn.addEventListener('pointerdown', (e) => {
        if (
          !chatDrawerOpen ||
          chatDrawerFullscreen ||
          window.innerWidth <= 767 ||
          e.button !== 0
        ) {
          return;
        }
        chatDrawerDragState = {
          pointerId: e.pointerId,
          startX: e.clientX,
          startWidth: getCurrentChatDrawerWidth(),
          dragging: false,
        };
        try {
          toggleBtn.setPointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      });
      toggleBtn.addEventListener('pointermove', (e) => {
        if (!chatDrawerDragState || chatDrawerDragState.pointerId !== e.pointerId) return;
        const delta = chatDrawerDragState.startX - e.clientX;
        if (
          !chatDrawerDragState.dragging &&
          Math.abs(delta) < CHAT_DRAWER_DRAG_THRESHOLD
        ) {
          return;
        }
        chatDrawerDragState.dragging = true;
        e.preventDefault();
        root.classList.add('is-resizing');
        if (document.body && document.body.classList) {
          document.body.classList.add('dpr-chat-drawer-resizing');
        }
        applyChatDrawerWidth(chatDrawerDragState.startWidth + delta, {
          persist: false,
        });
      });
      const finishDrag = (e) => {
        if (!chatDrawerDragState || chatDrawerDragState.pointerId !== e.pointerId) return;
        const wasDragging = !!chatDrawerDragState.dragging;
        if (wasDragging) {
          e.preventDefault();
          saveChatDrawerWidth(getCurrentChatDrawerWidth());
          toggleBtn._suppressNextClick = true;
          window.setTimeout(() => {
            toggleBtn._suppressNextClick = false;
          }, 160);
        }
        root.classList.remove('is-resizing');
        if (document.body && document.body.classList) {
          document.body.classList.remove('dpr-chat-drawer-resizing');
        }
        try {
          toggleBtn.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }
        chatDrawerDragState = null;
      };
      toggleBtn.addEventListener('pointerup', finishDrag);
      toggleBtn.addEventListener('pointercancel', finishDrag);
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (toggleBtn._suppressNextClick) return;
        setChatDrawerOpen(!chatDrawerOpen, { focusInput: !chatDrawerOpen });
      });
    }

    const fullscreenBtn = root.querySelector('#paper-chat-fullscreen-btn');
    if (fullscreenBtn && !fullscreenBtn._boundChatDrawerFullscreen) {
      fullscreenBtn._boundChatDrawerFullscreen = true;
      fullscreenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!chatDrawerOpen) setChatDrawerOpen(true);
        setChatDrawerFullscreen(!chatDrawerFullscreen);
      });
    }

    const closeBtn = root.querySelector('#paper-chat-close-btn');
    if (closeBtn && !closeBtn._boundChatDrawerClose) {
      closeBtn._boundChatDrawerClose = true;
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setChatDrawerOpen(false);
      });
    }

    if (!chatDrawerEscBound) {
      chatDrawerEscBound = true;
      document.addEventListener('keydown', (e) => {
        if (e && e.key === 'Escape' && chatDrawerOpen) {
          if (chatDrawerFullscreen) {
            setChatDrawerFullscreen(false);
          } else {
            setChatDrawerOpen(false);
          }
        }
      });
    }

    if (!chatDrawerResizeBound) {
      chatDrawerResizeBound = true;
      window.addEventListener('resize', () => {
        const saved = loadChatDrawerWidth();
        if (saved) applyChatDrawerWidth(saved, { persist: false });
      });
    }
  };

  const destroyForPage = () => {
    chatDrawerOpen = false;
    chatDrawerFullscreen = false;
    if (document.body && document.body.classList) {
      document.body.classList.remove('dpr-chat-drawer-open');
      document.body.classList.remove('dpr-chat-drawer-fullscreen');
      document.body.classList.remove('dpr-chat-drawer-resizing');
    }
    removeChatArtifacts();
  };

  const getQuestionsPanel = (root) => {
    const r = root || getChatRoot();
    if (!r) return null;
    return r.querySelector('#chat-questions-panel');
  };

  const closeQuestionsPanel = (root) => {
    const panel = getQuestionsPanel(root);
    if (panel) panel.style.display = 'none';
    syncChatPopoverBackdrop(root);
  };

  const getQuickQuestionsPanel = (root) => {
    const r = root || getChatRoot();
    if (!r) return null;
    return r.querySelector('#chat-quick-questions-panel');
  };

  const closeQuickQuestionsPanel = (root) => {
    const panel = getQuickQuestionsPanel(root);
    if (panel) panel.style.display = 'none';
    syncChatPopoverBackdrop(root);
  };

  const syncChatPopoverBackdrop = (root) => {
    const r = root || getChatRoot();
    if (!r || !r.classList) return;
    const questionsPanel = getQuestionsPanel(r);
    const quickPanel = getQuickQuestionsPanel(r);
    const hasOpenPopover =
      (questionsPanel && questionsPanel.style.display !== 'none') ||
      (quickPanel && quickPanel.style.display !== 'none');
    r.classList.toggle('is-popover-open', !!hasOpenPopover);
  };

  const isQuestionsPanelOpen = (root) => {
    const panel = getQuestionsPanel(root);
    if (!panel) return false;
    return panel.style.display !== 'none';
  };

  const isQuickQuestionsPanelOpen = (root) => {
    const panel = getQuickQuestionsPanel(root);
    if (!panel) return false;
    return panel.style.display !== 'none';
  };

  const sendQuickQuestion = (paperId, question) => {
    const q = normalizeQuestion(question);
    if (!q) return;

    const root = getChatRoot();
    const input = root ? root.querySelector('#user-input') : document.getElementById('user-input');
    const btn = root ? root.querySelector('#send-btn') : document.getElementById('send-btn');
    if (btn && btn.disabled && btn.innerText === '思考中...') return;

    if (input) {
      input.value = q;
      try {
        resizeChatInput(input);
      } catch {
        // ignore
      }
    }
    closeQuickQuestionsPanel(root);
    closeQuestionsPanel(root);
    sendMessage(paperId);
  };

  const clearEmptyChatState = (historyDiv) => {
    if (!historyDiv || !historyDiv.querySelectorAll) return;
    historyDiv.querySelectorAll('.chat-empty-state').forEach((el) => {
      try {
        el.remove();
      } catch {
        // ignore
      }
    });
  };

  const renderEmptyChatState = (historyDiv, paperId) => {
    if (!historyDiv) return;
    historyDiv.innerHTML = '';

    const empty = document.createElement('div');
    empty.className = 'chat-empty-state';

    const mark = document.createElement('div');
    mark.className = 'chat-empty-mark';
    mark.textContent = '✦';

    const title = document.createElement('div');
    title.className = 'chat-empty-title';
    title.textContent = '从一个问题开始阅读';

    const list = document.createElement('div');
    list.className = 'chat-empty-suggestions';
    getQuickQuestions()
      .slice(0, 4)
      .forEach((q) => {
        const btn = document.createElement('button');
        btn.className = 'chat-empty-suggestion-btn';
        btn.type = 'button';
        btn.textContent = q;
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          sendQuickQuestion(paperId, q);
        });
        list.appendChild(btn);
      });

    empty.appendChild(mark);
    empty.appendChild(title);
    empty.appendChild(list);
    historyDiv.appendChild(empty);
  };

  const renderQuickQuestionsPanel = (root, options = {}) => {
    const panel = getQuickQuestionsPanel(root);
    if (!panel) return;
    const editMode = !!options.editMode;
    panel.innerHTML = '';

    const header = document.createElement('div');
    header.className = 'chat-quick-q-header';

    const title = document.createElement('div');
    title.className = 'chat-quick-q-title';
    title.textContent = '快捷问题';
    header.appendChild(title);

    const actions = document.createElement('div');
    actions.className = 'chat-quick-q-actions';

    if (!editMode) {
      const editBtn = document.createElement('button');
      editBtn.className = 'chat-quick-q-edit';
      editBtn.type = 'button';
      editBtn.textContent = '编辑';
      actions.appendChild(editBtn);
    }

    const closeBtn = document.createElement('button');
    closeBtn.className = 'chat-quick-q-close';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', '关闭快捷问题');
    closeBtn.textContent = '✕';
    actions.appendChild(closeBtn);

    header.appendChild(actions);
    panel.appendChild(header);

    if (editMode) {
      const textarea = document.createElement('textarea');
      textarea.className = 'chat-quick-q-editor';
      textarea.rows = 6;
      textarea.value = getQuickQuestions().join('\n');
      panel.appendChild(textarea);

      const note = document.createElement('div');
      note.className = 'chat-quick-q-note';
      note.textContent = '每行一个问题，最多保留 8 条。';
      panel.appendChild(note);

      const footer = document.createElement('div');
      footer.className = 'chat-quick-q-footer';
      [
        ['重置默认', 'chat-quick-q-reset'],
        ['取消', 'chat-quick-q-cancel'],
        ['保存', 'chat-quick-q-save'],
      ].forEach(([label, className]) => {
        const btn = document.createElement('button');
        btn.className = className;
        btn.type = 'button';
        btn.textContent = label;
        footer.appendChild(btn);
      });
      panel.appendChild(footer);
      textarea.focus();
      return;
    }

    const desc = document.createElement('div');
    desc.className = 'chat-quick-q-desc';
    desc.textContent = '点击后会自动发送给当前论文。';
    panel.appendChild(desc);

    const list = document.createElement('div');
    list.className = 'chat-quick-q-list';
    getQuickQuestions().forEach((q) => {
      const btn = document.createElement('button');
      btn.className = 'chat-quick-q-use';
      btn.type = 'button';
      btn.dataset.q = q;
      btn.textContent = q;
      list.appendChild(btn);
    });
    panel.appendChild(list);
  };

  const openQuickQuestionsPanel = (root) => {
    const panel = getQuickQuestionsPanel(root);
    if (!panel) return;
    closeQuestionsPanel(root);
    renderQuickQuestionsPanel(root);
    panel.style.display = 'block';
    syncChatPopoverBackdrop(root);
  };

  const toggleQuickQuestionsPanel = (root) => {
    if (isQuickQuestionsPanelOpen(root)) closeQuickQuestionsPanel(root);
    else openQuickQuestionsPanel(root);
  };

  const renderQuestionsPanel = (root) => {
    const panel = getQuestionsPanel(root);
    if (!panel) return;
    panel.innerHTML = '';

    const pinned = getPinnedQuestions();
    const recent = getRecentQuestions().filter((q) => !pinned.includes(q));

    const header = document.createElement('div');
    header.className = 'chat-q-header';

    const title = document.createElement('div');
    title.className = 'chat-q-title';
    title.textContent = '最近提问';

    const closeBtn = document.createElement('button');
    closeBtn.id = 'chat-q-close';
    closeBtn.className = 'chat-q-close';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', '关闭');
    closeBtn.textContent = '✕';

    header.appendChild(title);
    header.appendChild(closeBtn);
    panel.appendChild(header);

    const buildSection = (label, items, pinnedFlag) => {
      const sec = document.createElement('div');
      sec.className = 'chat-q-section';

      const secTitle = document.createElement('div');
      secTitle.className = 'chat-q-section-title';
      secTitle.textContent = label;
      sec.appendChild(secTitle);

      const list = document.createElement('div');
      list.className = 'chat-q-list';

      if (!items.length) {
        const empty = document.createElement('div');
        empty.className = 'chat-q-empty';
        empty.textContent = pinnedFlag
          ? '暂无钉住的问题'
          : '暂无最近问题（从现在开始记录）';
        list.appendChild(empty);
      } else {
        items.forEach((q) => {
          const item = document.createElement('div');
          item.className = `chat-q-item${pinnedFlag ? ' is-pinned' : ''}`;
          item.dataset.q = q;

          const useBtn = document.createElement('button');
          useBtn.className = 'chat-q-use';
          useBtn.type = 'button';
          useBtn.title = '填入输入框';
          useBtn.textContent = q;

          const pinBtn = document.createElement('button');
          pinBtn.className = 'chat-q-pin';
          pinBtn.type = 'button';
          pinBtn.title = pinnedFlag ? '取消钉住' : '钉住';
          pinBtn.textContent = pinnedFlag ? '📌' : '📍';

          item.appendChild(useBtn);
          item.appendChild(pinBtn);
          list.appendChild(item);
        });
      }

      sec.appendChild(list);
      panel.appendChild(sec);
    };

    buildSection('📌 已钉住', pinned, true);
    buildSection('🕘 最近 10 条', recent.slice(0, MAX_RECENT_QUESTIONS), false);
  };

  const openQuestionsPanel = (root) => {
    const panel = getQuestionsPanel(root);
    if (!panel) return;
    closeQuickQuestionsPanel(root);
    renderQuestionsPanel(root);
    panel.style.display = 'block';
    syncChatPopoverBackdrop(root);
  };

  const toggleQuestionsPanel = (root) => {
    if (isQuestionsPanelOpen(root)) closeQuestionsPanel(root);
    else openQuestionsPanel(root);
  };

  let questionsGlobalBound = false;
  const bindQuestionsPanelEventsOnce = (paperId) => {
    const root = getChatRoot();
    if (!root) return;

    const quickBtn = root.querySelector('#chat-quick-questions-toggle-btn');
    if (quickBtn && !quickBtn._boundQuickQToggle) {
      quickBtn._boundQuickQToggle = true;
      quickBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleQuickQuestionsPanel(root);
      });
    }

    const btn = root.querySelector('#chat-questions-toggle-btn');
    if (btn && !btn._boundQToggle) {
      btn._boundQToggle = true;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleQuestionsPanel(root);
      });
    }

    // 面板内部事件委托
    if (!root._boundQPanelClick) {
      root._boundQPanelClick = true;
      root.addEventListener('click', (e) => {
        const panel = getQuestionsPanel(root);
        const quickPanel = getQuickQuestionsPanel(root);
        const panelOpen = panel && panel.style.display !== 'none';
        const quickPanelOpen = quickPanel && quickPanel.style.display !== 'none';
        if (!panelOpen && !quickPanelOpen) return;
        const clickedInsideQuickPanel =
          quickPanel && e.target && quickPanel.contains
            ? quickPanel.contains(e.target)
            : false;
        const clickedInsidePanel =
          panel && e.target && panel.contains ? panel.contains(e.target) : false;

        if (quickPanelOpen && clickedInsideQuickPanel) {
          const quickClose =
            e.target && e.target.closest
              ? e.target.closest('.chat-quick-q-close')
              : null;
          if (quickClose) {
            e.preventDefault();
            closeQuickQuestionsPanel(root);
            return;
          }

          const quickEdit =
            e.target && e.target.closest
              ? e.target.closest('.chat-quick-q-edit')
              : null;
          if (quickEdit) {
            e.preventDefault();
            renderQuickQuestionsPanel(root, { editMode: true });
            return;
          }

          const quickCancel =
            e.target && e.target.closest
              ? e.target.closest('.chat-quick-q-cancel')
              : null;
          if (quickCancel) {
            e.preventDefault();
            renderQuickQuestionsPanel(root);
            return;
          }

          const quickReset =
            e.target && e.target.closest
              ? e.target.closest('.chat-quick-q-reset')
              : null;
          if (quickReset) {
            e.preventDefault();
            resetQuickQuestions();
            renderQuickQuestionsPanel(root);
            const historyDiv = root.querySelector('#chat-history');
            if (historyDiv && historyDiv.querySelector('.chat-empty-state')) {
              renderEmptyChatState(historyDiv, paperId);
            }
            return;
          }

          const quickSave =
            e.target && e.target.closest
              ? e.target.closest('.chat-quick-q-save')
              : null;
          if (quickSave) {
            e.preventDefault();
            const editor = quickPanel.querySelector('.chat-quick-q-editor');
            const lines = editor ? editor.value.split(/\r?\n/) : [];
            saveQuickQuestions(lines);
            renderQuickQuestionsPanel(root);
            const historyDiv = root.querySelector('#chat-history');
            if (historyDiv && historyDiv.querySelector('.chat-empty-state')) {
              renderEmptyChatState(historyDiv, paperId);
            }
            return;
          }

          const quickUse =
            e.target && e.target.closest
              ? e.target.closest('.chat-quick-q-use')
              : null;
          if (quickUse) {
            e.preventDefault();
            e.stopPropagation();
            sendQuickQuestion(paperId, quickUse.dataset.q || quickUse.textContent || '');
            return;
          }
        }

        if ((quickPanelOpen || panelOpen) && !clickedInsideQuickPanel && !clickedInsidePanel) {
          closeQuickQuestionsPanel(root);
          closeQuestionsPanel(root);
          return;
        }

        if (!panelOpen || !clickedInsidePanel) return;

        const closeBtn =
          e.target && e.target.closest ? e.target.closest('#chat-q-close') : null;
        if (closeBtn) {
          e.preventDefault();
          closeQuestionsPanel(root);
          return;
        }

        const pinBtn =
          e.target && e.target.closest ? e.target.closest('.chat-q-pin') : null;
        if (pinBtn) {
          const item =
            e.target && e.target.closest ? e.target.closest('.chat-q-item') : null;
          const q = item ? item.dataset.q : '';
          togglePinQuestion(q);
          renderQuestionsPanel(root);
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        const useBtn =
          e.target && e.target.closest ? e.target.closest('.chat-q-use') : null;
        if (useBtn) {
          const item =
            e.target && e.target.closest ? e.target.closest('.chat-q-item') : null;
          const q = item ? item.dataset.q : '';
          const input = root.querySelector('#user-input');
          if (input && q) {
            input.value = q;
            input.focus();
          }
          // 选择某一项后自动关闭面板
          closeQuestionsPanel(root);
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      });
    }

    if (questionsGlobalBound) return;
    questionsGlobalBound = true;

    // 面板外关闭：用 pointerdown（鼠标左键按下就关闭；触摸也会关闭）
    document.addEventListener(
      'pointerdown',
      (e) => {
        // 可能存在重复渲染导致的多个 chat 容器，这里对“所有打开的面板”做统一处理
        const panels = Array.from(
          document.querySelectorAll(
            '#paper-chat-container .chat-questions-panel, #paper-chat-container .chat-quick-questions-panel',
          ),
        );
        const openPanels = panels.filter((p) => p && p.style.display !== 'none');
        if (!openPanels.length) return;

        // 仅鼠标左键触发（右键/中键不处理）
        if (e && e.pointerType === 'mouse' && typeof e.button === 'number') {
          if (e.button !== 0) return;
        }

        const insideChat =
          e.target && e.target.closest
            ? e.target.closest('#paper-chat-container')
            : null;
        if (!insideChat) {
          openPanels.forEach((p) => {
            try {
              p.style.display = 'none';
            } catch {
              // ignore
            }
          });
          document
            .querySelectorAll('#paper-chat-container')
            .forEach((el) => syncChatPopoverBackdrop(el));
        }
      },
      true,
    );

    // ESC 关闭
    document.addEventListener('keydown', (e) => {
      if (e && e.key === 'Escape') {
        closeQuestionsPanel(null);
        closeQuickQuestionsPanel(null);
      }
    });
  };

  const renderHistory = async (paperId) => {
    const historyDiv = document.getElementById('chat-history');
    if (!historyDiv) return;

    const data = await loadChatHistoryWithRemote(paperId);
    if (!data || !data.length) {
      renderEmptyChatState(historyDiv, paperId);
      return;
    }

    const { renderMarkdownWithTables, renderMathInEl } = window.DPRMarkdown || {};
    historyDiv.innerHTML = '';
    data.forEach((msg) => {
      const item = document.createElement('div');
      item.className = 'msg-item';

      const role = (msg.role || '').toLowerCase();
      const isThinking = role === 'thinking';
      const isAi = role === 'ai' || role === 'assistant' || isThinking;
      const isUser = role === 'user';

      if (!isThinking) {
        if (msg.time) {
          const timeSpan = document.createElement('span');
          timeSpan.className = 'msg-time ' + (isUser ? 'msg-time-user' : 'msg-time-ai');
          timeSpan.appendChild(document.createTextNode(msg.time));
          if (isAi && msg.model) {
            const modelSpan = document.createElement('span');
            modelSpan.className = 'msg-model-name';
            modelSpan.textContent = msg.model;
            timeSpan.appendChild(modelSpan);
          }
          item.appendChild(timeSpan);
        }

        const contentDiv = document.createElement('div');
        contentDiv.className =
          'msg-content ' + (isAi ? 'msg-content-ai' : 'msg-content-user');
        const markdown = msg.content || '';

        if (isUser) {
          contentDiv.textContent = markdown;
        } else if (renderMarkdownWithTables) {
          contentDiv.innerHTML = renderMarkdownWithTables(markdown);
        } else {
          contentDiv.textContent = markdown;
        }
        if (renderMathInEl) {
          renderMathInEl(contentDiv);
        }

        item.appendChild(contentDiv);
        historyDiv.appendChild(item);
        return;
      }

      // Thinking entries keep the timestamp above the compact toggle card.
      if (msg.time) {
        const timeSpan = document.createElement('span');
        timeSpan.className = 'msg-time msg-time-ai';
        timeSpan.textContent = msg.time;
        item.appendChild(timeSpan);
      }

      const thinkingContainer = document.createElement('div');
      thinkingContainer.className = 'thinking-history-container';

      const thinkingHeader = document.createElement('div');
      thinkingHeader.className = 'thinking-history-header';
      const titleSpan = document.createElement('span');
      titleSpan.className = 'thinking-label';
      titleSpan.textContent = 'Thinking';
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'thinking-history-toggle';
      toggleBtn.textContent = '展开';
      toggleBtn.setAttribute('aria-expanded', 'false');
      thinkingHeader.appendChild(titleSpan);
      thinkingHeader.appendChild(toggleBtn);

      const thinkingContent = document.createElement('div');
      thinkingContent.className =
        'msg-content thinking-history-content thinking-collapsed';
      const markdown = msg.content || '';
      let thinkingCollapsed = true;
      const renderThinking = () => {
        const source = thinkingCollapsed ? '...' : markdown;
        if (thinkingCollapsed || !renderMarkdownWithTables) {
          thinkingContent.textContent = source;
        } else {
          thinkingContent.innerHTML = renderMarkdownWithTables(source);
        }
        thinkingContent.classList.toggle('thinking-collapsed', thinkingCollapsed);
        toggleBtn.textContent = thinkingCollapsed ? '展开' : '收起';
        toggleBtn.setAttribute('aria-expanded', thinkingCollapsed ? 'false' : 'true');
        if (!thinkingCollapsed && renderMathInEl) {
          renderMathInEl(thinkingContent);
        }
      };
      renderThinking();

      thinkingContainer.appendChild(thinkingHeader);
      thinkingContainer.appendChild(thinkingContent);

      toggleBtn.addEventListener('click', () => {
        thinkingCollapsed = !thinkingCollapsed;
        renderThinking();
      });

      item.appendChild(thinkingContainer);
      historyDiv.appendChild(item);
    });

    historyDiv.scrollTop = historyDiv.scrollHeight;

    // 同时更新问题导航
    ensureQuestionNavContainer();
    renderQuestionNav(paperId);

    // 聊天历史渲染完成后，通知 Zotero 元数据刷新一次（包含最新对话）
    try {
      if (window.DPRZoteroMeta && window.DPRZoteroMeta.updateFromPage) {
        // vm.route.file 在前端不可见，这里只传 paperId，后端函数会使用当前路由
        window.DPRZoteroMeta.updateFromPage(paperId);
      }
    } catch {
      // 忽略刷新失败
    }
  };

  const ensureQuestionNavContainer = () => {};

  const renderQuestionNav = () => {};

  const resizeChatInput = (input) => {
    if (!input) return;
    const maxHeight = Math.max(
      110,
      Math.min(Math.floor(window.innerHeight * 0.32), 240),
    );
    input.style.height = 'auto';
    const nextHeight = Math.min(input.scrollHeight, maxHeight);
    input.style.height = `${nextHeight}px`;
    input.style.overflowY = input.scrollHeight > maxHeight ? 'auto' : 'hidden';
  };

  const resetChatInput = (input) => {
    if (!input) return;
    input.value = '';
    input.style.height = '';
    input.style.overflowY = 'hidden';
    requestAnimationFrame(() => resizeChatInput(input));
  };

  let chatQuotePopover = null;
  let chatQuoteSelectionText = '';
  let chatQuoteSelectionBound = false;

  const normalizeQuoteText = (text) =>
    String(text || '')
      .replace(/\u00a0/g, ' ')
      .replace(/\r\n?/g, '\n')
      .split('\n')
      .map((line) => line.trim())
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

  const formatQuotedInput = (text, source) => {
    const normalized = normalizeQuoteText(text);
    if (!normalized) return '';
    const title = source === 'chat' ? '引用对话' : '引用原文';
    const lines = normalized.split('\n').map((line) => (line ? `> ${line}` : '>'));
    return `${title}:\n${lines.join('\n')}\n\n`;
  };

  const insertTextIntoChatInput = (input, text) => {
    if (!input || !text) return false;
    const current = input.value || '';
    const canUseSelection =
      typeof input.selectionStart === 'number' &&
      typeof input.selectionEnd === 'number' &&
      document.activeElement === input;

    if (canUseSelection) {
      const start = input.selectionStart;
      const end = input.selectionEnd;
      const before = current.slice(0, start);
      const after = current.slice(end);
      const prefix = before && !/\n\n$/.test(before) ? (/\n$/.test(before) ? '\n' : '\n\n') : '';
      const suffix = after && !/^\n/.test(after) ? '\n\n' : '';
      input.value = `${before}${prefix}${text}${suffix}${after}`;
      const cursor = before.length + prefix.length + text.length;
      try {
        input.setSelectionRange(cursor, cursor);
      } catch {
        // ignore
      }
    } else {
      const prefix = current.trim() ? `${current.replace(/\s+$/g, '')}\n\n` : '';
      input.value = `${prefix}${text}`;
      try {
        input.setSelectionRange(input.value.length, input.value.length);
      } catch {
        // ignore
      }
    }

    input.dispatchEvent(new Event('input', { bubbles: true }));
    resizeChatInput(input);
    input.focus();
    return true;
  };

  const quoteToInput = (text, options = {}) => {
    const snippet = formatQuotedInput(text, options.source);
    if (!snippet) return false;

    const root = getChatRoot();
    if (!root) return false;
    setChatDrawerOpen(true, { focusInput: false });

    const input = root.querySelector('#user-input');
    if (!input || input.disabled) {
      setChatStatus('Paper Copilot 输入框当前不可用，解锁后再引用。', CHAT_SYNC_ERROR_COLOR);
      return false;
    }

    closeQuickQuestionsPanel(root);
    closeQuestionsPanel(root);
    hideChatQuotePopover();
    const ok = insertTextIntoChatInput(input, snippet);
    if (ok) {
      setChatStatus('已引用到提问框，可继续输入问题。', CHAT_SYNC_SUCCESS_COLOR);
    }
    return ok;
  };

  const getElementFromRangeNode = (node) => {
    if (!node) return null;
    return node.nodeType === 1 ? node : node.parentElement;
  };

  const getChatSelectableContent = (node) => {
    const el = getElementFromRangeNode(node);
    return el && el.closest ? el.closest('#chat-history .msg-content') : null;
  };

  const clampChatQuotePopoverPosition = (x, y, popover) => {
    if (!popover) return;
    const rect = popover.getBoundingClientRect();
    const pad = 10;
    const left = Math.max(pad, Math.min(x, window.innerWidth - rect.width - pad));
    const top = Math.max(pad, Math.min(y, window.innerHeight - rect.height - pad));
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
  };

  const hideChatQuotePopover = () => {
    chatQuoteSelectionText = '';
    if (chatQuotePopover) {
      chatQuotePopover.classList.remove('is-open');
    }
  };

  const ensureChatQuotePopover = () => {
    if (chatQuotePopover && document.body.contains(chatQuotePopover)) {
      return chatQuotePopover;
    }
    const popover = document.createElement('div');
    popover.className = 'chat-quote-popover';
    popover.innerHTML =
      '<button type="button" class="chat-quote-popover-btn" data-chat-quote-action="quote">引用</button>';
    popover.addEventListener('mousedown', (event) => event.preventDefault());
    popover.addEventListener('click', (event) => {
      const quoteBtn =
        event.target && event.target.closest
          ? event.target.closest('[data-chat-quote-action="quote"]')
          : null;
      if (!quoteBtn) return;
      event.preventDefault();
      event.stopPropagation();
      const quoted = chatQuoteSelectionText;
      if (quoteToInput(quoted, { source: 'chat' })) {
        const selection = window.getSelection && window.getSelection();
        if (selection && selection.removeAllRanges) selection.removeAllRanges();
      }
      hideChatQuotePopover();
    });
    document.body.appendChild(popover);
    chatQuotePopover = popover;
    return popover;
  };

  const showChatQuotePopover = (text, x, y) => {
    chatQuoteSelectionText = normalizeQuoteText(text);
    if (!chatQuoteSelectionText) {
      hideChatQuotePopover();
      return;
    }
    const popover = ensureChatQuotePopover();
    popover.classList.add('is-open');
    requestAnimationFrame(() => clampChatQuotePopoverPosition(x, y, popover));
  };

  const handleChatHistorySelectionMouseUp = (event) => {
    window.setTimeout(() => {
      const target = event && event.target;
      if (target && target.closest && target.closest('.chat-quote-popover')) return;
      if (target && target.closest && target.closest('textarea,input,select,button')) {
        hideChatQuotePopover();
        return;
      }

      const root = getChatRoot();
      const historyDiv = root && root.querySelector('#chat-history');
      if (!historyDiv) {
        hideChatQuotePopover();
        return;
      }

      const selection = window.getSelection && window.getSelection();
      if (!selection || selection.rangeCount < 1 || selection.isCollapsed) {
        hideChatQuotePopover();
        return;
      }

      const range = selection.getRangeAt(0);
      const startContent = getChatSelectableContent(range.startContainer);
      const endContent = getChatSelectableContent(range.endContainer);
      if (
        !startContent ||
        !endContent ||
        !historyDiv.contains(startContent) ||
        !historyDiv.contains(endContent)
      ) {
        hideChatQuotePopover();
        return;
      }

      const selectedText = normalizeQuoteText(selection.toString());
      if (!selectedText) {
        hideChatQuotePopover();
        return;
      }

      const rect = range.getBoundingClientRect();
      const x =
        rect && rect.left
          ? rect.left + rect.width / 2
          : (event.clientX || window.innerWidth / 2);
      const y =
        rect && rect.bottom
          ? rect.bottom + 8
          : ((event.clientY || window.innerHeight / 2) + 12);
      showChatQuotePopover(selectedText, x, y);
    }, 0);
  };

  const bindChatQuoteSelectionEventsOnce = () => {
    if (chatQuoteSelectionBound) return;
    chatQuoteSelectionBound = true;

    document.addEventListener('mouseup', handleChatHistorySelectionMouseUp, true);
    document.addEventListener(
      'pointerdown',
      (event) => {
        const target = event && event.target;
        if (target && target.closest && target.closest('.chat-quote-popover')) return;
        if (chatQuotePopover && chatQuotePopover.classList.contains('is-open')) {
          hideChatQuotePopover();
        }
      },
      true,
    );
    document.addEventListener('keydown', (event) => {
      if (event && event.key === 'Escape') hideChatQuotePopover();
    });
    document.addEventListener(
      'scroll',
      () => {
        if (chatQuotePopover && chatQuotePopover.classList.contains('is-open')) {
          hideChatQuotePopover();
        }
      },
      true,
    );
  };

  const sendMessage = async (paperId) => {
    // 游客模式或尚未解锁密钥时，禁止直接调用大模型
    if (window.DPR_ACCESS_MODE === 'guest' || window.DPR_ACCESS_MODE === 'locked') {
      const statusEl = document.getElementById('chat-status');
      if (statusEl) {
        statusEl.textContent =
          '当前为游客模式或尚未解锁密钥，无法直接与大模型对话。';
        statusEl.style.color = '#c00';
      }
      const historyDiv = document.getElementById('chat-history');
      if (historyDiv && !historyDiv._guestHintShown) {
        historyDiv._guestHintShown = true;
        historyDiv.innerHTML =
          '<div style="text-align:center; color:#999; padding:8px 0;">当前为游客模式，解锁密钥后可启用大模型对话。</div>';
      }
      return;
    }
    const input = document.getElementById('user-input');
    const btn = document.getElementById('send-btn');
    const statusEl = document.getElementById('chat-status');

    if (!input || !btn) {
      if (statusEl) {
        statusEl.textContent = '聊天输入框未就绪，请刷新页面重试。';
        statusEl.style.color = '#c00';
      }
      return;
    }

    const question = input.value.trim();
    let paperContent = '';

    if (!question) {
      if (statusEl) {
        statusEl.textContent = '请输入问题后再发送。';
        statusEl.style.color = '#c00';
      }
      return;
    }

    resetChatInput(input);

    // 优先使用与后端一致的 .txt 抽取全文作为上下文（不截断）
    if (paperId) {
      try {
        const txtUrl = `docs/${paperId}.txt`;
        const resp = await fetch(txtUrl);
        if (resp.ok) {
          const txt = await resp.text();
          if (txt && txt.trim()) {
            paperContent = txt;
            const snippet = txt.slice(0, 50).replace(/\s+/g, ' ');
            console.log(
              `[DPR DEBUG] paper_txt_content (${paperId}): '${snippet}'`,
            );
          } else {
            console.log(
              `[DPR DEBUG] paper_txt_content (${paperId}): <empty or whitespace>`,
            );
          }
        } else {
          console.log(
            `[DPR DEBUG] paper_txt_content (${paperId}): <http ${resp.status}>`,
          );
        }
      } catch {
        console.log(
          `[DPR DEBUG] paper_txt_content (${paperId}): <fetch failed>`,
        );
      }
    }

    // 回退策略：如果 .txt 不存在，就用页面正文纯文本
    if (!paperContent) {
      paperContent =
        (document.querySelector('.markdown-section') || {}).innerText ||
        '';
    }

    if (!question) return;

    // 从现在开始记录“最近提问”（只记录用户输入；不回溯旧聊天）
    recordRecentQuestion(question);
    // 如果面板开着，顺手刷新一下列表（体验更顺滑）
    if (isQuestionsPanelOpen(null)) {
      renderQuestionsPanel(null);
    }

    input.disabled = true;
    btn.disabled = true;
    btn.innerText = '思考中...';
    const syncBtnDuringSend = document.getElementById('chat-sync-btn');
    if (syncBtnDuringSend) {
      syncBtnDuringSend.disabled = true;
    }
    const pullRemoteBtnDuringSend = document.getElementById('chat-pull-remote-btn');
    if (pullRemoteBtnDuringSend) {
      pullRemoteBtnDuringSend.disabled = true;
    }
    const restoreChatInputControls = () => {
      input.disabled = false;
      btn.disabled = false;
      btn.innerText = '发送';
      if (syncBtnDuringSend) {
        syncBtnDuringSend.disabled =
          String(window.DPR_ACCESS_MODE || '').toLowerCase() !== 'full';
      }
      if (pullRemoteBtnDuringSend) {
        pullRemoteBtnDuringSend.disabled =
          String(window.DPR_ACCESS_MODE || '').toLowerCase() !== 'full';
      }
    };

    const historyDiv = document.getElementById('chat-history');
    clearEmptyChatState(historyDiv);
    const nowStr = new Date().toLocaleString();
    // 立刻用“气泡样式”渲染用户消息（避免等刷新后才套上 msg-content-user）
    try {
      const userItem = document.createElement('div');
      userItem.className = 'msg-item';

      const time = document.createElement('span');
      time.className = 'msg-time msg-time-user';
      time.textContent = nowStr;

      const content = document.createElement('div');
      content.className = 'msg-content msg-content-user';
      content.textContent = question;

      userItem.appendChild(time);
      userItem.appendChild(content);
      historyDiv.appendChild(userItem);
    } catch {
      // 回退：至少不要把用户输入当作 HTML 注入
      const userItem = document.createElement('div');
      userItem.className = 'msg-item';
      const content = document.createElement('div');
      content.className = 'msg-content msg-content-user';
      content.textContent = question;
      userItem.appendChild(content);
      historyDiv.appendChild(userItem);
    }
    historyDiv.scrollTop = historyDiv.scrollHeight;

    const aiItem = document.createElement('div');
    aiItem.className = 'msg-item';
    aiItem.innerHTML = `
        <span class="msg-time msg-time-ai"><span class="msg-time-value">${nowStr}</span><span class="msg-model-name"></span></span>
        <div class="ai-response-header">
          <span class="ai-thinking-indicator">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </span>
        </div>
        <div class="thinking-container" style="display:none;">
          <div class="thinking-header">
            <span class="thinking-label">Thinking</span>
            <button class="thinking-toggle" aria-expanded="false">展开</button>
          </div>
          <div class="thinking-content thinking-collapsed"></div>
        </div>
        <div class="msg-content msg-content-ai"></div>
    `;
    historyDiv.appendChild(aiItem);

    // 判断用户是否在页面底部（允许 50px 误差）
    let userAtBottom = true;
    const checkIfAtBottom = () => {
      const threshold = 50;
      if (!historyDiv) return true;
      return (
        historyDiv.scrollHeight -
          historyDiv.scrollTop -
          historyDiv.clientHeight <=
        threshold
      );
    };
    userAtBottom = checkIfAtBottom();

    // 监听用户滚动，更新 userAtBottom 状态
    const onUserScroll = () => {
      userAtBottom = checkIfAtBottom();
    };
    if (historyDiv) {
      historyDiv.addEventListener('scroll', onUserScroll);
    }

    // 自动滚动到底部（仅当用户本来就在底部时）
    const scrollToBottomIfNeeded = () => {
      if (userAtBottom && historyDiv) {
        historyDiv.scrollTo({
          top: historyDiv.scrollHeight,
          behavior: 'smooth'
        });
      }
    };

    // 发送消息后立即滚动到底部
    if (historyDiv) {
      historyDiv.scrollTo({
        top: historyDiv.scrollHeight,
        behavior: 'smooth'
      });
    }

    const thinkingContainer = aiItem.querySelector('.thinking-container');
    const thinkingContent = aiItem.querySelector('.thinking-content');
    const toggleBtn = aiItem.querySelector('.thinking-toggle');
    const aiAnswerDiv = aiItem.querySelector('.msg-content');

    const history = await loadChatHistoryWithRemote(paperId);

    // 调试：打印历史消息前 50 个字符
    try {
      history.forEach((m, idx) => {
        const role = m.role || 'unknown';
        const snippet = (m.content || '').slice(0, 50).replace(/\s+/g, ' ');
        console.log(
          `[DPR DEBUG] history[${idx}] role=${role}: '${snippet}'`,
        );
      });
      const qSnippet = question.slice(0, 50).replace(/\s+/g, ' ');
      console.log(`[DPR DEBUG] current_question: '${qSnippet}'`);
    } catch {
      // 忽略调试输出错误
    }
    history.push({
      role: 'user',
      content: question,
      time: nowStr,
    });
    await saveChatHistory(paperId, history);

    // 更新问题导航（新增了用户提问）
    renderQuestionNav(paperId);

    // 给刚添加的用户消息设置 ID（用于问题导航定位）
    const userMessages = historyDiv.querySelectorAll('.msg-content-user');
    if (userMessages.length > 0) {
      const lastUserItem = userMessages[userMessages.length - 1].closest('.msg-item');
      if (lastUserItem && !lastUserItem.id) {
        const userQuestionCount = history.filter(m => m.role === 'user').length;
        lastUserItem.id = `user-question-${userQuestionCount - 1}`;
      }
    }

    // 用户发起提问后，立即刷新一次 Zotero 摘要（包含最新提问）
    try {
      if (window.DPRZoteroMeta && window.DPRZoteroMeta.updateFromPage) {
        window.DPRZoteroMeta.updateFromPage(paperId);
      }
    } catch {
      // 忽略刷新失败
    }

    const chatModels = getChatLLMConfig();
    const modelSelect = document.getElementById('chat-llm-model-select');

    if (!chatModels.length) {
      aiAnswerDiv.textContent =
        '当前未在密钥配置中找到可用的 Chat 模型，请先完成首页「新配置指引」。';
      if (statusEl) {
        statusEl.textContent =
          '未检测到可用 Chat 模型，请检查密钥配置。';
        statusEl.style.color = '#c00';
      }
      restoreChatInputControls();
      return;
    }

    // 选择默认模型：优先下拉框当前值，否则取列表第一项
    let selectedModelName = '';
    if (modelSelect && modelSelect.value) {
      selectedModelName = modelSelect.value;
    } else if (chatModels.length) {
      selectedModelName = chatModels[0].name;
    }
    const modelEntry =
      chatModels.find((m) => m.name === selectedModelName) ||
      chatModels[0] ||
      null;

    const apiKey = modelEntry ? (modelEntry.apiKey || '').trim() : '';
    const model = modelEntry ? modelEntry.name : '';
    const liveModelBadge = aiItem.querySelector('.msg-model-name');
    if (liveModelBadge) {
      liveModelBadge.textContent = model || '';
    }

    if (!apiKey) {
      aiAnswerDiv.textContent =
        '未检测到可用的 Chat LLM API Key，请检查密钥配置。';
      if (statusEl) {
        statusEl.textContent = '未配置 Chat LLM API Key。';
        statusEl.style.color = '#c00';
      }
      restoreChatInputControls();
      return;
    }

    if (!model) {
      aiAnswerDiv.textContent =
        '未指定 Chat 模型，请检查密钥配置。';
      if (statusEl) {
        statusEl.textContent = '未配置 Chat 模型。';
        statusEl.style.color = '#c00';
      }
      restoreChatInputControls();
      return;
    }

    const endpoint = (() => {
      const raw = (modelEntry && modelEntry.baseUrl ? modelEntry.baseUrl : '').trim();
      if (!raw) return '';
      if (
        window.DPRLLMConfigUtils &&
        typeof window.DPRLLMConfigUtils.buildChatCompletionsEndpoint === 'function'
      ) {
        return window.DPRLLMConfigUtils.buildChatCompletionsEndpoint(raw);
      }
      if (raw.includes('/chat/completions')) return raw;
      const normalized = raw.replace(/\/+$/, '');
      if (/\/v\d+$/i.test(normalized)) {
        return `${normalized}/chat/completions`;
      }
      return `${normalized}/v1/chat/completions`;
    })();

    if (!endpoint) {
      aiAnswerDiv.textContent = '当前模型配置缺少 baseUrl。';
      if (statusEl) {
        statusEl.textContent = 'Chat 模型配置缺少 baseUrl，请在配置页修正。';
        statusEl.style.color = '#c00';
      }
      restoreChatInputControls();
      return;
    }

    // 记录当前使用的模型为用户偏好，供后续页面复用
    savePreferredModelName(model);

    if (statusEl) {
      statusEl.textContent = '';
      statusEl.style.color = '';
    }

    let thinkingBuffer = '';
    let answerBuffer = '';
    // 默认折叠 thinking，只给出占位省略号，完整内容由按钮展开。
    let thinkingCollapsed = true;
    let renderTimer = null;

    const { renderMarkdownWithTables, renderMathInEl } =
      window.DPRMarkdown || {};

    const applyThinkingView = () => {
      if (!thinkingBuffer || !thinkingContent) return;
      const source = thinkingCollapsed ? '...' : thinkingBuffer;

      if (thinkingCollapsed || !renderMarkdownWithTables) {
        thinkingContent.textContent = source;
      } else {
        thinkingContent.innerHTML = renderMarkdownWithTables(source);
      }
      thinkingContent.classList.toggle('thinking-collapsed', thinkingCollapsed);
      if (!thinkingCollapsed && renderMathInEl) {
        renderMathInEl(thinkingContent);
      }
    };

    const applyAnswerView = () => {
      if (!aiAnswerDiv) return;
      const content = answerBuffer || '（空响应）';
      if (renderMarkdownWithTables) {
        aiAnswerDiv.innerHTML = renderMarkdownWithTables(content);
      } else {
        aiAnswerDiv.textContent = content;
      }
      if (renderMathInEl) {
        renderMathInEl(aiAnswerDiv);
      }
    };

    if (toggleBtn && thinkingContainer) {
      toggleBtn.addEventListener('click', () => {
        thinkingCollapsed = !thinkingCollapsed;
        toggleBtn.textContent = thinkingCollapsed ? '展开' : '收起';
        toggleBtn.setAttribute('aria-expanded', thinkingCollapsed ? 'false' : 'true');
        applyThinkingView();
      });
    }

    const scheduleRender = () => {
      if (renderTimer) return;
      renderTimer = requestAnimationFrame(() => {
        renderTimer = null;
        if (thinkingBuffer && thinkingContainer) {
          thinkingContainer.style.display = 'block';
          applyThinkingView();
        }
        if (answerBuffer) {
          applyAnswerView();
        }
        scrollToBottomIfNeeded();
      });
    };

    try {
      const messages = [];
      messages.push({
        role: 'system',
        content:
          '你是学术讨论助手，负责围绕当前论文内容进行深入分析与讨论。请使用中文回答，并使用 Markdown + LaTeX 表达公式。',
      });
      // 使用全文上下文（优先 .txt 抽取结果），不再做 8000 字截断
      if (paperContent) {
        messages.push({
          role: 'user',
          content: `下面是当前论文的完整纯文本内容（可能包含自动抽取噪声，仅供参考）：\n\n${paperContent}`,
        });
      }

          const prev = await loadChatHistory(paperId);
      prev.forEach((m) => {
        if (m.role === 'user' || m.role === 'ai') {
          messages.push({
            role: m.role === 'ai' ? 'assistant' : 'user',
            content: m.content || '',
          });
        }
      });

      messages.push({
        role: 'user',
          content: question,
      });

      const controller = new AbortController();
      const timeoutMs = 120000;
      const timerId = setTimeout(() => controller.abort(), timeoutMs);
      let resp = null;

      const baseUrl = (modelEntry && modelEntry.baseUrl ? modelEntry.baseUrl : '').trim();
      const chatProfile = inferChatApiProfile(baseUrl, model);
      const primaryPayload = buildStreamingChatPayload(baseUrl, model, messages);
      const fallbackPayload = {
        model,
        messages,
        stream: true,
      };

      const doChatFetch = async (payload) => fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          signal: controller.signal,
          body: JSON.stringify(payload),
        });

      try {
        resp = await doChatFetch(primaryPayload);
        if (
          resp
          && !resp.ok
          && (
            JSON.stringify(primaryPayload).includes('"reasoning"')
            || JSON.stringify(primaryPayload).includes('"extra_body"')
            || JSON.stringify(primaryPayload).includes('"thinking"')
          )
        ) {
          let retryText = '';
          try {
            retryText = await resp.text();
          } catch {
            retryText = '';
          }
          if (
            resp.status === 400
            && /reasoning|extra_body|return_reasoning|thinking/i.test(retryText)
          ) {
            resp = await doChatFetch(fallbackPayload);
          } else {
            resp._dprErrorPreview = retryText;
          }
        }
      } finally {
        clearTimeout(timerId);
      }

      if (!resp.ok) {
        let errorText = '';
        try {
          errorText = resp._dprErrorPreview || await resp.text();
        } catch {
          errorText = '';
        }
        const preview = (errorText || '').slice(0, 300).replace(/\s+/g, ' ');
        console.error(
          '[DPR CHAT] Chat API 调用失败：',
          `HTTP ${resp.status} ${resp.statusText || ''}`,
          preview ? `| 响应内容片段: ${preview}` : '',
        );
        aiAnswerDiv.textContent = `请求失败: HTTP ${resp.status} ${
          resp.statusText || ''
        }${preview ? ` - ${preview}` : ''}`;
        if (statusEl) {
          statusEl.textContent = `调用 Chat 模型失败: HTTP ${resp.status} ${
            resp.statusText || ''
          }${preview ? ` - ${preview}` : ''}`;
          statusEl.style.color = '#c00';
        }
        return;
      }

      if (!resp.body) {
        // 回退：如果不支持流，则按一次性响应处理
        const data = await resp.json();
        const answer =
          data &&
          data.choices &&
          data.choices[0] &&
          data.choices[0].message &&
          data.choices[0].message.content
            ? data.choices[0].message.content
            : '（模型未返回内容）';
        answerBuffer = answer;
        scheduleRender();
      } else {
        const reader = resp.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const parts = buffer.split('\n\n');
          buffer = parts.pop() || '';

          for (const part of parts) {
            const line = part.trim();
            if (!line || !line.startsWith('data:')) continue;
            const jsonStr = line.replace(/^data:\s*/, '');
            if (jsonStr === '[DONE]') continue;
            let payload;
            try {
              payload = JSON.parse(jsonStr);
            } catch {
              continue;
            }
            const choice =
              payload.choices && payload.choices[0]
                ? payload.choices[0]
                : null;
            const delta = choice ? choice.delta || {} : {};
            const reasoning =
              delta.reasoning_content || delta.thinking || '';
            const contentPiece = delta.content || '';

            if (reasoning) {
              thinkingBuffer += reasoning;
            }
            if (contentPiece) {
              answerBuffer += contentPiece;
            }
            if (reasoning || contentPiece) {
              scheduleRender();
            }
          }
        }
      }

      // 回复完成，移除思考动画及其容器
      const responseHeader = aiItem.querySelector('.ai-response-header');
      if (responseHeader) {
        responseHeader.remove();
      }

      const nowStrAnswer = new Date().toLocaleString();
      const updated = await loadChatHistory(paperId);
      if (thinkingBuffer.trim()) {
        updated.push({
          role: 'thinking',
          content: thinkingBuffer,
          time: nowStrAnswer,
        });
      }
      updated.push({
        role: 'ai',
        content: answerBuffer || '（模型未返回内容）',
        time: nowStrAnswer,
        model,
      });
      await saveChatHistory(paperId, updated);

      // 新一轮对话完成后，再次刷新 Zotero 元数据
      try {
        if (window.DPRZoteroMeta && window.DPRZoteroMeta.updateFromPage) {
          window.DPRZoteroMeta.updateFromPage(paperId);
        }
      } catch {
        // 忽略刷新失败
      }

      if (statusEl) {
        statusEl.textContent = '';
        statusEl.style.color = '';
      }

      resetChatInput(input);
    } catch (e) {
      console.error(e);
      const isTimeout =
        e &&
        (e.name === 'AbortError' ||
          e.name === 'TimeoutError' ||
          /timed out|timed_out/i.test((e.message || '')));
      if (isTimeout) {
        aiAnswerDiv.textContent =
          '请求超时（120 秒），请稍后重试或检查网络后再试。';
        if (statusEl) {
          statusEl.textContent = '聊天请求超时，请检查网络。';
          statusEl.style.color = '#c00';
        }
      } else if (e && e.name === 'TypeError') {
        aiAnswerDiv.textContent = '网络连接异常（可能为 CORS 或跨域问题）。';
        if (statusEl) {
          statusEl.textContent =
            '请求失败：网络连接异常，请确认模型端点可访问（含 CORS）及代理设置。';
          statusEl.style.color = '#c00';
        }
      } else {
        aiAnswerDiv.textContent = '发送失败，请检查网络或模型配置。';
        if (statusEl) {
          statusEl.textContent = '发送失败，请检查网络或模型配置。';
          statusEl.style.color = '#c00';
        }
      }
      if (statusEl) {
        statusEl.style.color = '#c00';
      }
    } finally {
      // 确保思考动画及其容器被移除
      const responseHeader = aiItem.querySelector('.ai-response-header');
      if (responseHeader) {
        responseHeader.remove();
      }
      if (historyDiv) {
        historyDiv.removeEventListener('scroll', onUserScroll);
      }
      restoreChatInputControls();
      input.focus();
    }
  };

  const initForPage = (paperId) => {
    const mainContent = document.querySelector('.markdown-section');
    if (!mainContent || !paperId) return;

    removeChatArtifacts();
    const container = document.createElement('div');
    container.innerHTML = renderChatUI();
    const root = container.firstElementChild;
    if (!root) return;
    document.body.appendChild(root);
    const savedDrawerWidth = loadChatDrawerWidth();
    if (savedDrawerWidth) applyChatDrawerWidth(savedDrawerWidth, { persist: false });
    setChatDrawerFullscreen(chatDrawerFullscreen);
    setChatDrawerOpen(chatDrawerOpen);
    bindChatDrawerEventsOnce(root);
    bindChatQuoteSelectionEventsOnce();

    // 最近提问按钮/面板
    bindQuestionsPanelEventsOnce(paperId);

    const sendBtnEl = document.getElementById('send-btn');
    const inputEl = document.getElementById('user-input');
    const statusEl = document.getElementById('chat-status');
    const modelSelect = document.getElementById('chat-llm-model-select');
    const chatSidebarBtn = document.getElementById('chat-sidebar-toggle-btn');
    const chatSettingsBtn = document.getElementById('chat-settings-toggle-btn');
    const chatSyncBtn = document.getElementById('chat-sync-btn');
    const chatPullRemoteBtn = document.getElementById('chat-pull-remote-btn');
    const chatQuickRunBtn = document.getElementById('chat-quick-run-btn');
    const chatQuickRunCloseBtn = document.getElementById('chat-quick-run-close-btn');
    const chatQuickRunTodayBtn = document.getElementById('chat-quick-run-today-btn');
    const chatQuickRun10dBtn = document.getElementById('chat-quick-run-10d-btn');
    const chatQuickRun30dBtn = document.getElementById('chat-quick-run-30d-btn');
    const chatQuickRunConferenceBtn = document.getElementById(
      'chat-quick-run-conference-run-btn',
    );
    const chatQuickRunYearSelect = document.getElementById('chat-quick-run-year-select');
    const chatQuickRunConferenceSelect = document.getElementById(
      'chat-quick-run-conference-select',
    );
    const chatQuickRunConferenceMsg = document.getElementById(
      'chat-quick-run-conference-msg',
    );
    const modal = getQuickRunModal();
    if (modal && modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }
    fillQuickRunOptions(chatQuickRunYearSelect, chatQuickRunConferenceSelect);

    const inGuestMode =
      window.DPR_ACCESS_MODE === 'guest' || window.DPR_ACCESS_MODE === 'locked';

    const enableChatControls = () => {
      const sendBtn = document.getElementById('send-btn');
      const input = document.getElementById('user-input');
      const status = document.getElementById('chat-status');
      const select = document.getElementById('chat-llm-model-select');

      if (sendBtn && !sendBtn._boundSend) {
        sendBtn._boundSend = true;
        sendBtn.disabled = false;
        sendBtn.title = '';
        sendBtn.addEventListener('click', () => {
          sendMessage(paperId);
        });
      }

      if (input && !input._boundKey) {
        input._boundKey = true;
        input.disabled = false;
        input.placeholder = '针对这篇论文提问，仅自己可见...';
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
            e.preventDefault();
            sendMessage(paperId);
          }
        });
        input.addEventListener('input', () => resizeChatInput(input));
      }
      if (input) resizeChatInput(input);

      const syncBtn = document.getElementById('chat-sync-btn');
      if (syncBtn) {
        syncBtn.disabled = false;
        syncBtn.title = '加密同步会话到仓库';
        if (!syncBtn._boundSync) {
          syncBtn._boundSync = true;
          syncBtn.addEventListener('click', () => {
            handleSyncChatClick(paperId);
          });
        }
      }

      const pullRemoteBtn = document.getElementById('chat-pull-remote-btn');
      if (pullRemoteBtn) {
        pullRemoteBtn.disabled = false;
        pullRemoteBtn.title = '清空本地对话并拉取远程会话';
        if (!pullRemoteBtn._boundPullRemote) {
          pullRemoteBtn._boundPullRemote = true;
          pullRemoteBtn.addEventListener('click', () => {
            handlePullRemoteChatClick(paperId);
          });
        }
      }

      if (select) {
        const chatModels = getChatLLMConfig();
        // 解锁后重新启用下拉框
        select.disabled = false;
        select.title = '';
        select.innerHTML = '';
        const names = Array.from(
          new Set(chatModels.map((m) => (m.name || '').trim()).filter(Boolean)),
        );
        names.forEach((name) => {
          const opt = document.createElement('option');
          opt.value = name;
          opt.textContent = name;
          select.appendChild(opt);
        });
        // 选择模型默认值：
        // 1. 若存在用户偏好（localStorage），优先使用偏好；
        // 2. 否则退回第一个可用模型。
        const prefName = loadPreferredModelName();
        let defaultName = '';
        if (prefName && names.includes(prefName)) {
          defaultName = prefName;
        } else if (names.length) {
          defaultName = names[0];
        }
        if (defaultName) {
          select.value = defaultName;
        }
        if (!names.length && status) {
          status.textContent =
            '未检测到可用 Chat 模型，请在新配置指引中配置 chatLLMs。';
          status.style.color = '#c00';
        }

        // 用户手动切换模型时，更新偏好，跨页面复用
        if (!select._boundChange) {
          select._boundChange = true;
          select.addEventListener('change', () => {
            const v = (select.value || '').trim();
            if (v) {
              savePreferredModelName(v);
            }
          });
        }
      }
    };

    if (sendBtnEl) {
      if (inGuestMode) {
        sendBtnEl.disabled = true;
        sendBtnEl.title = '当前为游客模式或未解锁密钥，无法直接提问。';
      } else {
        enableChatControls();
      }
    }
    if (inputEl) {
      if (inGuestMode) {
        inputEl.disabled = true;
        inputEl.placeholder = '当前为游客模式，解锁密钥后才能向大模型提问。';
      } else {
        // 已在 enableChatControls 中绑定
      }
    }
    if (modelSelect) {
      if (inGuestMode) {
        modelSelect.disabled = true;
        modelSelect.title = '当前为游客模式或未解锁密钥，无法选择大模型。';
      }
    }
    if (chatSyncBtn) {
      if (inGuestMode) {
        chatSyncBtn.disabled = true;
        chatSyncBtn.title = '当前为游客模式或未解锁密钥，无法同步会话。';
      } else {
        chatSyncBtn.disabled = false;
      }
    }
    if (chatPullRemoteBtn) {
      if (inGuestMode) {
        chatPullRemoteBtn.disabled = true;
        chatPullRemoteBtn.title = '当前为游客模式或未解锁密钥，无法拉取远程会话。';
      } else {
        chatPullRemoteBtn.disabled = false;
      }
    }

    // 如果当前是 locked/guest，则等待密钥解锁事件，再启用聊天控件
    if (inGuestMode) {
      const handler = (e) => {
        const mode = e && e.detail && e.detail.mode;
        if (mode === 'full') {
          document.removeEventListener('dpr-access-mode-changed', handler);
          enableChatControls();
        }
      };
      document.addEventListener('dpr-access-mode-changed', handler);
    }

    // 小屏幕下聊天区侧边栏开关与后台管理按钮
    if (chatSidebarBtn && !chatSidebarBtn._bound) {
      chatSidebarBtn._bound = true;
      chatSidebarBtn.addEventListener('click', () => {
        // 优先复用 Docsify 自带的 sidebar-toggle 行为
        const toggle = document.querySelector('.sidebar-toggle');
        if (toggle) {
          toggle.click();
          return;
        }
        // 兜底：直接切换 body.close，用于控制侧边栏展开/收起
        // const body = document.body;
        // if (!body) return;
        // body.classList.toggle('close');
      });
    }

    if (chatSettingsBtn && !chatSettingsBtn._bound) {
      chatSettingsBtn._bound = true;
      chatSettingsBtn.addEventListener('click', () => {
        // 复用底部齿轮按钮的行为：发出 ensure-arxiv-ui 和 load-arxiv-subscriptions 事件
        const ensureEvent = new CustomEvent('ensure-arxiv-ui');
        document.dispatchEvent(ensureEvent);

        setTimeout(() => {
          const loadEvent = new CustomEvent('load-arxiv-subscriptions');
          document.dispatchEvent(loadEvent);

          const overlay = document.getElementById('arxiv-search-overlay');
          if (overlay) {
            overlay.style.display = 'flex';
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                overlay.classList.add('show');
              });
            });
          }
        }, 100);
      });
    }

    const closeQuickRunPopover = () => {
      const modal = getQuickRunModal();
      if (!modal) return;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');

      setTimeout(() => {
        if (modal.classList.contains('is-open')) return;
        modal.style.display = 'none';
      }, 300);
    };

    const openQuickRunPopover = () => {
      const modal = getQuickRunModal();
      if (!modal) return;
      modal.setAttribute('aria-hidden', 'false');
      modal.style.display = 'flex';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          modal.classList.add('is-open');
        });
      });
    };

    const openQuickRunPanelInner = () => {
      const modal = getQuickRunModal();
      if (!modal) {
        if (chatQuickRunConferenceMsg) {
          chatQuickRunConferenceMsg.textContent = '当前页面未完成快速抓取入口初始化。';
          chatQuickRunConferenceMsg.style.color = '#c90';
        }
        return false;
      }
      toggleQuickRunPopover();
      return true;
    };

    const flushQuickRunOpenRequest = () => {
      if (window.__dprQuickRunOpenRequested) {
        window.__dprQuickRunOpenRequested = false;
        openQuickRunPanelInner();
      }
    };

    const toggleQuickRunPopover = () => {
      const modal = getQuickRunModal();
      if (!modal) return;
      if (modal.classList.contains('is-open')) {
        closeQuickRunPopover();
        return;
      }
      if (chatQuickRunConferenceMsg) {
        chatQuickRunConferenceMsg.textContent = '';
        chatQuickRunConferenceMsg.style.color = '#999';
      }
      openQuickRunPopover();
    };

    if (chatQuickRunBtn && !chatQuickRunBtn._bound) {
      chatQuickRunBtn._bound = true;
      chatQuickRunBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleQuickRunPopover();
      });
    }

    if (chatQuickRunCloseBtn && !chatQuickRunCloseBtn._bound) {
      chatQuickRunCloseBtn._bound = true;
      chatQuickRunCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeQuickRunPopover();
      });
    }

    if (chatQuickRun10dBtn && !chatQuickRun10dBtn._bound) {
      chatQuickRun10dBtn._bound = true;
      chatQuickRun10dBtn.addEventListener('click', () => {
        runQuickFetch(10, statusEl, closeQuickRunPopover);
      });
    }

    if (chatQuickRunTodayBtn && !chatQuickRunTodayBtn._bound) {
      chatQuickRunTodayBtn._bound = true;
      chatQuickRunTodayBtn.addEventListener('click', () => {
        runQuickFetch(
          1,
          statusEl,
          closeQuickRunPopover,
          {
            fetchMode: 'standard',
            dispatchInputs: {
              fetch_mode: 'standard',
            },
          },
        );
      });
    }

    if (chatQuickRun30dBtn && !chatQuickRun30dBtn._bound) {
      chatQuickRun30dBtn._bound = true;
      chatQuickRun30dBtn.addEventListener('click', () => {
        runQuickFetch(30, statusEl, closeQuickRunPopover);
      });
    }

    if (chatQuickRunConferenceBtn && !chatQuickRunConferenceBtn._bound) {
      chatQuickRunConferenceBtn._bound = true;
      chatQuickRunConferenceBtn.addEventListener('click', () => {
        runQuickConferencePlaceholder(
          chatQuickRunYearSelect,
          chatQuickRunConferenceSelect,
          chatQuickRunConferenceMsg,
          statusEl,
        );
      });
    }

    if (!document._dprQuickRunPopoverBound) {
      document._dprQuickRunPopoverBound = true;
      document.addEventListener('click', (e) => {
        const modal = getQuickRunModal();
        if (!modal || !modal.classList.contains('is-open')) {
          return;
        }
        if (e.target === modal) {
          closeQuickRunPopover();
          return;
        }
        if (!modal.contains(e.target)) {
          closeQuickRunPopover();
        }
      });
    }

    if (!document._dprQuickRunOpenEventBound) {
      document._dprQuickRunOpenEventBound = true;
      document.addEventListener('dpr-open-quick-run', () => {
        window.__dprQuickRunOpenRequested = false;
        openQuickRunPanelInner();
      });
    }

    flushQuickRunOpenRequest();

    if (!document._dprQuickRunEscBound) {
      document._dprQuickRunEscBound = true;
      document.addEventListener('keydown', (e) => {
        if (e && e.key === 'Escape') {
          closeQuickRunPopover();
        }
      });
    }

    renderHistory(paperId).catch(() => {});

    quickRunPanelController = openQuickRunPanelInner;
  };

  return {
    initForPage,
    destroyForPage,
    quoteToInput,
    openQuickRunPanel: () => {
      if (typeof quickRunPanelController === 'function') {
        const ok = quickRunPanelController();
        if (ok === true) return true;
      }
      if (
        window.DPRWorkflowRunner &&
        typeof window.DPRWorkflowRunner.open === 'function'
      ) {
        window.DPRWorkflowRunner.open();
        return true;
      }
      return false;
    },
  };
})();
