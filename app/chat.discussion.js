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
  const CHAT_HIGHLIGHTS_KEY = 'dpr_chat_text_highlights_v1';
  const CHAT_HIGHLIGHT_COLORS = Object.freeze([
    { key: 'yellow', label: '黄色', value: '#fff2a8' },
    { key: 'green', label: '绿色', value: '#c9f7d4' },
    { key: 'blue', label: '蓝色', value: '#cfe8ff' },
    { key: 'purple', label: '紫色', value: '#eadcff' },
    { key: 'red', label: '红色', value: '#ffd6d6' },
  ]);
  let remoteChatDbCache = null;
  let remoteChatDbLoadedPath = '';
  let activeChatPaperId = '';

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
            <nav id="chat-question-nav" class="chat-question-nav" aria-label="\u5bf9\u8bdd\u95ee\u9898\u5bfc\u822a" hidden></nav>
            <aside id="chat-answer-outline" class="chat-answer-outline" aria-label="\u5f53\u524d\u56de\u7b54\u5927\u7eb2" hidden></aside>
            <div id="chat-history"></div>
            <div id="chat-input-quote-stack" class="chat-input-quote-stack" aria-live="polite" hidden></div>
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
    try {
      const notebook = window.DPRPaperNotebook;
      if (notebook && typeof notebook.syncLayout === 'function') {
        notebook.syncLayout();
      }
    } catch {
      // ignore
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
      const outline = root.querySelector('#chat-answer-outline');
      if (outline) outline.hidden = true;
      return;
    }

    scheduleChatAnswerOutlineUpdate();

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
    activeChatPaperId = '';
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

  const chatNowIso = () => new Date().toISOString();

  const normalizeChatHighlightColor = (color) => {
    const found = CHAT_HIGHLIGHT_COLORS.find((item) => item.key === color || item.value === color);
    return found ? found.value : CHAT_HIGHLIGHT_COLORS[0].value;
  };

  const hashChatString = (value) => {
    const text = String(value || '');
    let hash = 5381;
    for (let i = 0; i < text.length; i += 1) {
      hash = ((hash << 5) + hash) ^ text.charCodeAt(i);
    }
    return (hash >>> 0).toString(36);
  };

  const normalizeChatMessageRole = (role) => {
    const value = String(role || '').toLowerCase();
    if (value === 'assistant') return 'ai';
    if (value === 'user') return 'user';
    if (value === 'thinking') return 'thinking';
    return value || 'message';
  };

  const getChatMessageBaseKey = (msg) => {
    const role = normalizeChatMessageRole(msg && msg.role);
    const explicitId = String((msg && (msg.id || msg.messageId || msg.uuid)) || '').trim();
    const source = explicitId
      ? `id:${explicitId}`
      : [
          role,
          (msg && msg.time) || '',
          (msg && msg.model) || '',
          (msg && msg.content) || '',
        ].join('|');
    return `chat-${role}-${hashChatString(source)}`;
  };

  const getChatMessageKeyForList = (messages, index) => {
    const list = Array.isArray(messages) ? messages : [];
    const msg = list[index] || {};
    const base = getChatMessageBaseKey(msg);
    let occurrence = 0;
    for (let i = 0; i < index; i += 1) {
      if (getChatMessageBaseKey(list[i]) === base) occurrence += 1;
    }
    return occurrence ? `${base}-${occurrence + 1}` : base;
  };

  const assignChatMessageIdentity = (item, contentEl, msg, messages, index) => {
    if (!item || !contentEl) return '';
    const role = normalizeChatMessageRole(msg && msg.role);
    const key = getChatMessageKeyForList(messages, index);
    item.dataset.chatMessageKey = key;
    item.dataset.chatRole = role;
    contentEl.dataset.chatMessageKey = key;
    contentEl.dataset.chatRole = role;
    return key;
  };

  const loadChatHighlightStore = () => {
    try {
      if (!window.localStorage) return { papers: {} };
      const raw = window.localStorage.getItem(CHAT_HIGHLIGHTS_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return parsed && typeof parsed === 'object' && parsed.papers
        ? parsed
        : { papers: {} };
    } catch {
      return { papers: {} };
    }
  };

  const saveChatHighlightStore = (store) => {
    try {
      if (!window.localStorage) return;
      window.localStorage.setItem(CHAT_HIGHLIGHTS_KEY, JSON.stringify(store || { papers: {} }));
    } catch {
      // ignore
    }
  };

  const sanitizeChatHighlightItems = (items) =>
    (Array.isArray(items) ? items : [])
      .map((item) => {
        const start = Number(item && item.start);
        const end = Number(item && item.end);
        return {
          id: String((item && item.id) || '').trim(),
          messageKey: String((item && item.messageKey) || '').trim(),
          start,
          end,
          text: String((item && item.text) || ''),
          color: normalizeChatHighlightColor(item && item.color),
          createdAt: String((item && item.createdAt) || chatNowIso()),
          updatedAt: String((item && item.updatedAt) || chatNowIso()),
        };
      })
      .filter((item) => (
        item.id
        && item.messageKey
        && Number.isFinite(item.start)
        && Number.isFinite(item.end)
        && item.end > item.start
      ));

  const getChatHighlightRecord = (paperId) => {
    const store = loadChatHighlightStore();
    const record = (store.papers && store.papers[paperId]) || {};
    return {
      paperId,
      items: sanitizeChatHighlightItems(record.items),
      updatedAt: String(record.updatedAt || ''),
    };
  };

  const setChatHighlightRecord = (paperId, patch) => {
    if (!paperId) return;
    const store = loadChatHighlightStore();
    store.papers = store.papers || {};
    const prev = (store.papers && store.papers[paperId]) || {};
    store.papers[paperId] = {
      paperId,
      updatedAt: (patch && patch.updatedAt) || chatNowIso(),
      items: sanitizeChatHighlightItems(
        patch && Object.prototype.hasOwnProperty.call(patch, 'items')
          ? patch.items
          : prev.items,
      ),
    };
    saveChatHighlightStore(store);
  };

  const getChatHighlightById = (id) => {
    if (!activeChatPaperId || !id) return null;
    const record = getChatHighlightRecord(activeChatPaperId);
    return record.items.find((item) => item.id === id) || null;
  };

  const saveChatHighlightItems = (items) => {
    if (!activeChatPaperId) return;
    setChatHighlightRecord(activeChatPaperId, {
      items,
      updatedAt: chatNowIso(),
    });
    renderChatHighlightsForHistory();
  };

  const isIgnoredChatTextParent = (parent) => {
    if (!parent) return true;
    return !!parent.closest(
      'script, style, textarea, input, button, .chat-quote-popover, .chat-answer-outline',
    );
  };

  const getChatTextNodes = (root) => {
    const nodes = [];
    if (!root || !document.createTreeWalker || !window.NodeFilter) return nodes;
    const nodeFilter = window.NodeFilter;
    const walker = document.createTreeWalker(root, nodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node && node.parentElement;
        return isIgnoredChatTextParent(parent)
          ? nodeFilter.FILTER_REJECT
          : nodeFilter.FILTER_ACCEPT;
      },
    });
    let node = walker.nextNode();
    while (node) {
      nodes.push(node);
      node = walker.nextNode();
    }
    return nodes;
  };

  const unwrapRenderedChatHighlights = (root) => {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll('span.dpr-chat-text-highlight').forEach((span) => {
      const parent = span.parentNode;
      if (!parent) return;
      while (span.firstChild) {
        parent.insertBefore(span.firstChild, span);
      }
      span.remove();
      parent.normalize();
    });
  };

  const getChatAcceptedText = (root) =>
    getChatTextNodes(root).map((node) => node.nodeValue || '').join('');

  const findNearestChatTextIndex = (rootText, text, near) => {
    if (!text) return -1;
    let best = -1;
    let bestDistance = Infinity;
    let from = 0;
    while (from <= rootText.length) {
      const idx = rootText.indexOf(text, from);
      if (idx < 0) break;
      const distance = Math.abs(idx - near);
      if (distance < bestDistance) {
        best = idx;
        bestDistance = distance;
      }
      from = idx + Math.max(1, text.length);
    }
    return best;
  };

  const resolveChatStoredRanges = (items, rootText) => {
    const resolved = [];
    let lastEnd = -1;
    sanitizeChatHighlightItems(items)
      .sort((a, b) => a.start - b.start || a.end - b.end)
      .forEach((item) => {
        let start = item.start;
        let end = item.end;
        if (rootText.slice(start, end) !== item.text && item.text) {
          const idx = findNearestChatTextIndex(rootText, item.text, start);
          if (idx >= 0) {
            start = idx;
            end = idx + item.text.length;
          }
        }
        if (start < 0 || end > rootText.length || end <= start) return;
        if (start < lastEnd) return;
        resolved.push(Object.assign({}, item, { start, end }));
        lastEnd = end;
      });
    return resolved;
  };

  const wrapChatTextSegment = (node, start, end, item) => {
    if (!node || start >= end || !node.parentNode) return;
    const len = node.nodeValue.length;
    let target = node;
    if (end < len) {
      target.splitText(end);
    }
    if (start > 0) {
      target = target.splitText(start);
    }
    const span = document.createElement('span');
    span.className = 'dpr-chat-text-highlight';
    span.dataset.chatHighlightId = item.id;
    span.style.setProperty('--dpr-chat-highlight-color', normalizeChatHighlightColor(item.color));
    span.title = '点击修改高亮';
    target.parentNode.insertBefore(span, target);
    span.appendChild(target);
  };

  const applySingleChatHighlight = (root, item) => {
    const nodes = getChatTextNodes(root).map((node) => ({
      node,
      len: node.nodeValue.length,
    }));
    let offset = 0;
    nodes.forEach(({ node, len }) => {
      const nodeStart = offset;
      const nodeEnd = offset + len;
      offset = nodeEnd;
      const start = Math.max(item.start, nodeStart);
      const end = Math.min(item.end, nodeEnd);
      if (start >= end) return;
      wrapChatTextSegment(node, start - nodeStart, end - nodeStart, item);
    });
  };

  const renderChatHighlightsForContent = (contentEl) => {
    if (!contentEl) return;
    unwrapRenderedChatHighlights(contentEl);
    const messageKey = contentEl.dataset ? contentEl.dataset.chatMessageKey : '';
    if (!activeChatPaperId || !messageKey) return;
    const record = getChatHighlightRecord(activeChatPaperId);
    const items = record.items.filter((item) => item.messageKey === messageKey);
    if (!items.length) return;
    const rootText = getChatAcceptedText(contentEl);
    resolveChatStoredRanges(items, rootText).forEach((item) => {
      applySingleChatHighlight(contentEl, item);
    });
  };

  const renderChatHighlightsForHistory = () => {
    const root = getChatRoot();
    const historyDiv = root && root.querySelector('#chat-history');
    if (!historyDiv) return;
    historyDiv
      .querySelectorAll('.msg-content[data-chat-message-key]')
      .forEach((contentEl) => renderChatHighlightsForContent(contentEl));
  };

  const disableChatHeadingPageAnchors = (root) => {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
      heading.removeAttribute('id');
      heading.querySelectorAll('a').forEach((link) => {
        const href = String(link.getAttribute('href') || '');
        const isGeneratedAnchor =
          href.startsWith('#') ||
          link.classList.contains('anchor') ||
          link.hasAttribute('data-id');
        if (!isGeneratedAnchor || !link.parentNode) return;
        const parent = link.parentNode;
        while (link.firstChild) {
          parent.insertBefore(link.firstChild, link);
        }
        link.remove();
      });
    });
  };

  const rangeInsideChatContent = (range, root) => {
    if (!range || !root) return false;
    const elementNode = window.Node ? window.Node.ELEMENT_NODE : 1;
    const startNode = range.startContainer.nodeType === elementNode
      ? range.startContainer
      : range.startContainer.parentNode;
    const endNode = range.endContainer.nodeType === elementNode
      ? range.endContainer
      : range.endContainer.parentNode;
    return root.contains(startNode) && root.contains(endNode);
  };

  const getChatRangeOffsets = (range, root) => {
    const fallbackText = range && typeof range.toString === 'function' ? range.toString() : '';
    const fallbackRootText = getChatAcceptedText(root);
    const fallbackIndex = () => findNearestChatTextIndex(fallbackRootText, fallbackText, 0);
    const nodes = getChatTextNodes(root);
    let cursor = 0;
    let start = null;
    let end = null;
    let text = '';

    try {
      nodes.forEach((node) => {
        const len = node.nodeValue.length;
        let intersects = false;
        try {
          intersects = range.intersectsNode(node);
        } catch {
          intersects = range.startContainer === node || range.endContainer === node;
        }

        if (!intersects) {
          cursor += len;
          return;
        }

        const sliceStart = range.startContainer === node ? range.startOffset : 0;
        const sliceEnd = range.endContainer === node ? range.endOffset : len;
        if (sliceEnd > sliceStart) {
          if (start === null) start = cursor + sliceStart;
          end = cursor + sliceEnd;
          text += node.nodeValue.slice(sliceStart, sliceEnd);
        }
        cursor += len;
      });
    } catch {
      const idx = fallbackIndex();
      return {
        start: idx >= 0 ? idx : 0,
        end: idx >= 0 ? idx + fallbackText.length : 0,
        text: idx >= 0 ? fallbackText : '',
      };
    }

    if ((!text || !text.trim()) && fallbackText && fallbackText.trim()) {
      const idx = fallbackIndex();
      if (idx >= 0) {
        return {
          start: idx,
          end: idx + fallbackText.length,
          text: fallbackText,
        };
      }
    }

    return {
      start: start == null ? 0 : start,
      end: end == null ? 0 : end,
      text,
    };
  };

  const trimChatOutlineLabel = (text) => {
    const value = String(text || '').replace(/\s+/g, ' ').trim();
    return value || '';
  };

  const ensureChatOutlineTargetId = (el, index) => {
    if (!el) return '';
    if (el.dataset.chatOutlineId) return el.dataset.chatOutlineId;
    const content = el.closest ? el.closest('.msg-content-ai[data-chat-message-key]') : null;
    const messageKey = content && content.dataset ? content.dataset.chatMessageKey : '';
    const id = `outline-${hashChatString(`${messageKey}|${index}|${el.textContent || ''}`)}`;
    el.dataset.chatOutlineId = id;
    return id;
  };

  const collectChatAnswerOutlineItems = (contentEl) => {
    if (!contentEl || !contentEl.querySelectorAll) return [];
    const headingNodes = Array.from(contentEl.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .filter((el) => trimChatOutlineLabel(el.textContent));
    if (!headingNodes.length) return [];
    const seen = new Set();
    return headingNodes
      .map((el, index) => {
        const text = trimChatOutlineLabel(el.textContent);
        if (!text || seen.has(text)) return null;
        seen.add(text);
        const tag = String(el.tagName || '').toLowerCase();
        const level = /^h[1-6]$/.test(tag) ? Number(tag.slice(1)) : 3;
        return {
          id: ensureChatOutlineTargetId(el, index),
          text,
          level,
        };
      })
      .filter(Boolean);
  };

  const scrollChatHistoryToElement = (historyDiv, target) => {
    if (!historyDiv || !target || !target.getBoundingClientRect) return;
    const historyRect = historyDiv.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const nextTop = historyDiv.scrollTop + targetRect.top - historyRect.top - 18;
    historyDiv.scrollTo({
      top: Math.max(nextTop, 0),
      behavior: 'smooth',
    });
  };

  const getActiveChatAnswerItem = (historyDiv) => {
    if (!historyDiv || !historyDiv.querySelectorAll) return null;
    const items = Array.from(historyDiv.querySelectorAll('.msg-item'))
      .filter((item) => item.querySelector('.msg-content-ai'));
    if (!items.length) return null;
    const pivot = historyDiv.scrollTop + Math.min(180, Math.max(90, historyDiv.clientHeight * 0.32));
    let active = items[0];
    let bestDistance = Infinity;
    items.forEach((item) => {
      const top = item.offsetTop;
      const bottom = top + item.offsetHeight;
      if (pivot >= top && pivot <= bottom) {
        active = item;
        bestDistance = -1;
        return;
      }
      if (bestDistance >= 0) {
        const distance = Math.min(Math.abs(top - pivot), Math.abs(bottom - pivot));
        if (distance < bestDistance) {
          active = item;
          bestDistance = distance;
        }
      }
    });
    return active;
  };

  const getQuestionTextForChatAnswer = (answerItem) => {
    let cursor = answerItem ? answerItem.previousElementSibling : null;
    while (cursor) {
      const content = cursor.querySelector ? cursor.querySelector('.msg-content-user') : null;
      if (content) {
        const raw = String(
          content._chatRawText ||
          (content.dataset && content.dataset.chatRawText) ||
          content.innerText ||
          content.textContent ||
          '',
        );
        const parsed = parseUserQuestionWithQuotes(raw);
        const detail = parsed.question.replace(/\s+/g, ' ').trim();
        return detail || raw.replace(/\s+/g, ' ').trim() || '当前问题';
      }
      cursor = cursor.previousElementSibling;
    }
    return '当前问题';
  };

  const syncActiveChatAnswerOutline = (outline, historyDiv) => {
    if (!outline || !historyDiv) return;
    const buttons = Array.from(outline.querySelectorAll('.chat-answer-outline-item'));
    if (!buttons.length) return;
    const historyRect = historyDiv.getBoundingClientRect();
    const anchorTop = historyRect.top + Math.min(120, Math.max(48, historyRect.height * 0.18));
    let activeId = buttons[0].getAttribute('data-outline-target') || '';
    buttons.forEach((btn) => {
      const id = btn.getAttribute('data-outline-target') || '';
      const target = id
        ? historyDiv.querySelector(`[data-chat-outline-id="${id}"]`)
        : null;
      if (!target || !target.getBoundingClientRect) return;
      const rect = target.getBoundingClientRect();
      if (rect.top <= anchorTop) activeId = id;
    });
    buttons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-outline-target') === activeId);
    });
  };

  let chatAnswerOutlineCollapsed = false;
  let chatAnswerOutlineScale = 1;
  let chatAnswerOutlineDragState = null;

  const clampChatOutlineNumber = (value, min, max) =>
    Math.max(min, Math.min(max, value));

  const getChatAnswerOutlineBounds = (outline) => {
    if (!outline) return null;
    const outlineRect = outline.getBoundingClientRect();
    const bodyRect = {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
    return {
      bodyRect,
      outlineRect,
      left: outlineRect.left - bodyRect.left,
      top: outlineRect.top - bodyRect.top,
      width: outlineRect.width,
      height: outlineRect.height,
      layoutWidth: outline.offsetWidth || outlineRect.width,
      scale: chatAnswerOutlineScale,
    };
  };

  const applyChatAnswerOutlineScale = (outline) => {
    if (!outline) return;
    outline.style.setProperty(
      '--dpr-chat-answer-outline-scale',
      chatAnswerOutlineScale.toFixed(2),
    );
  };

  const startChatAnswerOutlineDrag = (outline, event, mode) => {
    const bounds = getChatAnswerOutlineBounds(outline);
    if (!bounds || !event) return;
    event.preventDefault();
    event.stopPropagation();
    chatAnswerOutlineDragState = {
      mode,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startLeft: bounds.left,
      startTop: bounds.top,
      startWidth: bounds.width,
      startHeight: bounds.height,
      startLayoutWidth: bounds.layoutWidth,
      startScale: bounds.scale,
      bodyWidth: bounds.bodyRect.width,
      bodyHeight: bounds.bodyRect.height,
      hasMoved: false,
    };
    applyChatAnswerOutlineScale(outline);
    outline.classList.toggle('is-dragging', mode === 'drag');
    outline.classList.toggle('is-resizing', mode === 'resize');
    try {
      outline.setPointerCapture(event.pointerId);
    } catch {
      // ignore
    }
  };

  const moveChatAnswerOutline = (outline, event) => {
    const state = chatAnswerOutlineDragState;
    if (!outline || !event || !state) return;
    event.preventDefault();
    const dx = event.clientX - state.startX;
    const dy = event.clientY - state.startY;
    if (Math.hypot(dx, dy) > 3) {
      state.hasMoved = true;
    }
    if (state.mode === 'drag') {
      const width = state.startWidth;
      const height = state.startHeight;
      const visualLeft = clampChatOutlineNumber(state.startLeft + dx, 4, state.bodyWidth - width - 4);
      const top = clampChatOutlineNumber(state.startTop + dy, 4, state.bodyHeight - height - 4);
      const cssLeft = visualLeft - state.startLayoutWidth * (1 - state.startScale);
      outline.style.left = `${cssLeft}px`;
      outline.style.top = `${top}px`;
      outline.style.right = 'auto';
      return;
    }
    if (state.mode === 'resize') {
      const delta = (dy - dx) / 260;
      chatAnswerOutlineScale = clampChatOutlineNumber(state.startScale + delta, 0.65, 1.7);
      applyChatAnswerOutlineScale(outline);
    }
  };

  const finishChatAnswerOutlineDrag = (outline, event) => {
    if (!chatAnswerOutlineDragState) return;
    const state = chatAnswerOutlineDragState;
    try {
      if (outline && event) outline.releasePointerCapture(event.pointerId);
    } catch {
      // ignore
    }
    if (outline) {
      outline.classList.remove('is-dragging', 'is-resizing');
      if (state.mode === 'drag') {
        outline._suppressOutlineCollapseClick = true;
        window.setTimeout(() => {
          outline._suppressOutlineCollapseClick = false;
        }, 0);
        if (!state.hasMoved) {
          chatAnswerOutlineCollapsed = !chatAnswerOutlineCollapsed;
          renderChatAnswerOutline();
        }
      }
    }
    chatAnswerOutlineDragState = null;
  };

  const createChatAnswerOutlineControls = (questionText = '') => {
    const controls = document.createElement('div');
    controls.className = 'chat-answer-outline-controls';
    const label = questionText || '当前问题';
    const handle = document.createElement('button');
    handle.type = 'button';
    handle.className = 'chat-answer-outline-drag-toggle';
    handle.setAttribute('data-outline-tool', 'collapse');
    handle.setAttribute(
      'aria-label',
      chatAnswerOutlineCollapsed ? '拖动 / 展开大纲' : '拖动 / 收起大纲',
    );
    handle.title = `${label} · ${chatAnswerOutlineCollapsed ? '拖动 / 展开大纲' : '拖动 / 收起大纲'}`;

    const question = document.createElement('span');
    question.className = 'chat-answer-outline-question';
    question.textContent = label;
    handle.appendChild(question);

    const icon = document.createElement('span');
    icon.className = 'chat-answer-outline-toggle-symbol';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = chatAnswerOutlineCollapsed ? '+' : '−';
    handle.appendChild(icon);

    controls.appendChild(handle);
    return controls;
  };

  const createChatAnswerOutlineResizeControl = () => {
    const row = document.createElement('div');
    row.className = 'chat-answer-outline-resize-row';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chat-answer-outline-tool chat-answer-outline-tool-resize';
    btn.setAttribute('data-outline-tool', 'resize');
    btn.setAttribute('aria-label', '缩放大纲');
    btn.title = '沿左下到右上缩放大纲';
    btn.textContent = '⇗';
    row.appendChild(btn);
    return row;
  };

  const ensureChatAnswerOutlineContainer = () => {
    const root = getChatRoot();
    if (!root) return null;
    let outline = root.querySelector('#chat-answer-outline');
    const historyDiv = root.querySelector('#chat-history');
    if (!outline) {
      outline = document.createElement('aside');
      outline.id = 'chat-answer-outline';
      outline.className = 'chat-answer-outline';
      outline.setAttribute('aria-label', '当前回答大纲');
      outline.hidden = true;
    }
    if (outline.parentElement !== root) {
      root.appendChild(outline);
    }
    if (outline && !outline._boundChatAnswerOutline) {
      outline._boundChatAnswerOutline = true;
      outline.addEventListener('click', (event) => {
        const tool =
          event.target && event.target.closest
            ? event.target.closest('[data-outline-tool]')
            : null;
        if (tool) {
          const action = tool.getAttribute('data-outline-tool') || '';
          if (action === 'collapse') {
            event.preventDefault();
            event.stopPropagation();
            if (outline._suppressOutlineCollapseClick) {
              outline._suppressOutlineCollapseClick = false;
              return;
            }
            chatAnswerOutlineCollapsed = !chatAnswerOutlineCollapsed;
            renderChatAnswerOutline();
          }
          return;
        }
        const btn =
          event.target && event.target.closest
            ? event.target.closest('.chat-answer-outline-item')
            : null;
        if (!btn || !historyDiv) return;
        const targetId = btn.getAttribute('data-outline-target') || '';
        const target = targetId
          ? historyDiv.querySelector(`[data-chat-outline-id="${targetId}"]`)
          : null;
        if (!target) return;
        event.preventDefault();
        scrollChatHistoryToElement(historyDiv, target);
        syncActiveChatAnswerOutline(outline, historyDiv);
      });
      outline.addEventListener('pointerdown', (event) => {
        const tool =
          event.target && event.target.closest
            ? event.target.closest('[data-outline-tool]')
            : null;
        if (!tool) return;
        const action = tool.getAttribute('data-outline-tool') || '';
        if (action === 'resize') {
          startChatAnswerOutlineDrag(outline, event, 'resize');
          return;
        }
        if (action === 'collapse') {
          startChatAnswerOutlineDrag(outline, event, 'drag');
        }
      });
      outline.addEventListener('pointermove', (event) => {
        moveChatAnswerOutline(outline, event);
      });
      outline.addEventListener('pointerup', (event) => {
        finishChatAnswerOutlineDrag(outline, event);
      });
      outline.addEventListener('pointercancel', (event) => {
        finishChatAnswerOutlineDrag(outline, event);
      });
    }
    if (historyDiv && !historyDiv._boundChatAnswerOutlineScroll) {
      historyDiv._boundChatAnswerOutlineScroll = true;
      historyDiv.addEventListener('scroll', () => scheduleChatAnswerOutlineUpdate());
    }
    return outline;
  };

  const renderChatAnswerOutline = () => {
    const outline = ensureChatAnswerOutlineContainer();
    const root = getChatRoot();
    const historyDiv = root && root.querySelector('#chat-history');
    if (!outline || !historyDiv) return;
    if (!chatDrawerOpen) {
      outline.hidden = true;
      return;
    }
    const activeItem = getActiveChatAnswerItem(historyDiv);
    const contentEl = activeItem && activeItem.querySelector('.msg-content-ai');
    const items = collectChatAnswerOutlineItems(contentEl);
    if (!contentEl) {
      outline.hidden = true;
      outline.innerHTML = '';
      return;
    }

    outline.hidden = false;
    outline.innerHTML = '';
    applyChatAnswerOutlineScale(outline);
    outline.classList.toggle('is-collapsed', chatAnswerOutlineCollapsed);
    outline.appendChild(createChatAnswerOutlineControls(getQuestionTextForChatAnswer(activeItem)));

    if (chatAnswerOutlineCollapsed) {
      return;
    }

    const list = document.createElement('div');
    list.className = 'chat-answer-outline-list';
    if (items.length) {
      items.forEach((item) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `chat-answer-outline-item is-level-${Math.min(4, Math.max(1, item.level))}`;
        btn.setAttribute('data-outline-target', item.id);
        btn.title = item.text;
        btn.textContent = item.text;
        list.appendChild(btn);
      });
    } else {
      const empty = document.createElement('div');
      empty.className = 'chat-answer-outline-empty';
      empty.textContent = '无';
      list.appendChild(empty);
    }
    outline.appendChild(list);
    outline.appendChild(createChatAnswerOutlineResizeControl());
    if (items.length) {
      syncActiveChatAnswerOutline(outline, historyDiv);
    }
  };

  let chatAnswerOutlineTimer = 0;
  const scheduleChatAnswerOutlineUpdate = () => {
    if (chatAnswerOutlineTimer) return;
    chatAnswerOutlineTimer = requestAnimationFrame(() => {
      chatAnswerOutlineTimer = 0;
      renderChatAnswerOutline();
    });
  };

  const normalizeInlineQuoteText = (text) =>
    String(text || '')
      .replace(/\u00a0/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const previewInlineQuoteText = (text, limit = 180) => {
    const normalized = normalizeInlineQuoteText(text);
    return normalized.length > limit ? `${normalized.slice(0, limit)}...` : normalized;
  };

  const normalizeQuoteBlockMeta = (quote, fallbackText = '') => {
    const source = quote && quote.source === 'chat'
      ? 'chat'
      : quote && quote.source === 'paper'
        ? 'paper'
        : 'auto';
    const out = {
      source,
      text: String((quote && quote.text) || fallbackText || ''),
    };
    const id = String((quote && quote.id) || '').trim();
    const start = Number(quote && quote.start);
    const end = Number(quote && quote.end);
    if (id) out.id = id;
    if (Number.isFinite(start) && Number.isFinite(end) && end > start) {
      out.start = start;
      out.end = end;
    }
    const paperId = String((quote && quote.paperId) || '').trim();
    const messageKey = String((quote && quote.messageKey) || '').trim();
    const highlightId = String((quote && quote.highlightId) || '').trim();
    if (paperId) out.paperId = paperId;
    if (messageKey) out.messageKey = messageKey;
    if (highlightId) out.highlightId = highlightId;
    return out;
  };

  const parseUserQuestionWithQuotes = (text) => {
    const quoteBlocks = [];
    const questionLines = [];
    let currentQuote = [];
    const flushQuote = () => {
      const quote = currentQuote.join('\n').trim();
      if (quote) quoteBlocks.push(quote);
      currentQuote = [];
    };

    String(text || '')
      .replace(/\r\n?/g, '\n')
      .split('\n')
      .forEach((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('>')) {
          currentQuote.push(trimmed.replace(/^>\s?/, ''));
          return;
        }
        flushQuote();
        if (!trimmed || /^引用(?:原文|对话)[:：]?$/.test(trimmed)) return;
        questionLines.push(line);
      });
    flushQuote();

    return {
      question: questionLines.join('\n').trim(),
      quotes: quoteBlocks,
    };
  };

  const renderUserQuestionContent = (contentEl, text, quoteMeta = []) => {
    if (!contentEl) return;
    const raw = String(text || '');
    const parsed = parseUserQuestionWithQuotes(raw);
    contentEl._chatRawText = raw;
    contentEl.dataset.chatHasRawText = '1';
    contentEl.innerHTML = '';

    if (parsed.quotes.length) {
      const quotesWrap = document.createElement('div');
      quotesWrap.className = 'chat-user-question-quotes';
      parsed.quotes.forEach((quoteText, index) => {
        const meta = normalizeQuoteBlockMeta(
          Array.isArray(quoteMeta) ? quoteMeta[index] : null,
          quoteText,
        );
        const quote = document.createElement('button');
        quote.type = 'button';
        quote.className = 'chat-user-question-quote';
        quote.setAttribute('data-chat-question-quote-index', String(index));
        quote._chatQuoteText = quoteText;
        quote._chatQuoteTarget = meta;
        quote.dataset.quoteSource = meta.source;
        quote.title = quoteText;
        quote.textContent = `引用：${previewInlineQuoteText(quoteText)}`;
        quotesWrap.appendChild(quote);
      });
      contentEl.appendChild(quotesWrap);
    }

    if (parsed.question) {
      const question = document.createElement('div');
      question.className = 'chat-user-question-text';
      question.textContent = parsed.question;
      contentEl.appendChild(question);
    } else if (!parsed.quotes.length) {
      contentEl.textContent = raw;
    }
  };

  const renderHistory = async (paperId) => {
    activeChatPaperId = paperId || activeChatPaperId;
    const historyDiv = document.getElementById('chat-history');
    if (!historyDiv) return;

    const data = await loadChatHistoryWithRemote(paperId);
    if (!data || !data.length) {
      renderEmptyChatState(historyDiv, paperId);
      renderQuestionNav();
      renderChatAnswerOutline();
      return;
    }

    const { renderMarkdownWithTables, renderMathInEl } = window.DPRMarkdown || {};
    historyDiv.innerHTML = '';
    let userQuestionIndex = -1;
    data.forEach((msg, index) => {
      const item = document.createElement('div');
      item.className = 'msg-item';

      const role = (msg.role || '').toLowerCase();
      const isThinking = role === 'thinking';
      const isAi = role === 'ai' || role === 'assistant' || isThinking;
      const isUser = role === 'user';
      if (isUser) {
        userQuestionIndex += 1;
        item.id = `user-question-${userQuestionIndex}`;
        item.dataset.questionIndex = String(userQuestionIndex);
      }

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
          renderUserQuestionContent(contentDiv, markdown, msg.quotes || msg.quoteBlocks || []);
        } else if (renderMarkdownWithTables) {
          contentDiv.innerHTML = renderMarkdownWithTables(markdown);
          disableChatHeadingPageAnchors(contentDiv);
        } else {
          contentDiv.textContent = markdown;
        }
        if (renderMathInEl) {
          renderMathInEl(contentDiv);
        }
        assignChatMessageIdentity(item, contentDiv, msg, data, index);

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
          disableChatHeadingPageAnchors(thinkingContent);
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
    renderQuestionNav();
    renderChatHighlightsForHistory();
    scheduleChatAnswerOutlineUpdate();

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

  const fastScrollElementTo = (el, top, duration = 150) => {
    if (!el) return;
    const maxTop = Math.max(0, el.scrollHeight - el.clientHeight);
    const targetTop = Math.max(0, Math.min(Number(top) || 0, maxTop));
    if (el._chatFastScrollFrame) {
      cancelAnimationFrame(el._chatFastScrollFrame);
      el._chatFastScrollFrame = 0;
    }
    if (duration <= 0 || Math.abs(el.scrollTop - targetTop) < 2) {
      el.scrollTop = targetTop;
      return;
    }
    const startTop = el.scrollTop;
    const delta = targetTop - startTop;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.scrollTop = startTop + delta * eased;
      if (progress < 1) {
        el._chatFastScrollFrame = requestAnimationFrame(tick);
      } else {
        el._chatFastScrollFrame = 0;
      }
    };
    el._chatFastScrollFrame = requestAnimationFrame(tick);
  };

  const ensureQuestionNavContainer = () => {
    const root = getChatRoot();
    if (!root) return null;
    let nav = root.querySelector('#chat-question-nav');
    const historyDiv = root.querySelector('#chat-history');
    if (!nav) {
      nav = document.createElement('nav');
      nav.id = 'chat-question-nav';
      nav.className = 'chat-question-nav';
      nav.setAttribute('aria-label', '对话问题导航');
      nav.hidden = true;
      const body = root.querySelector('.paper-chat-panel-body');
      if (body && historyDiv) {
        body.insertBefore(nav, historyDiv);
      }
    }
    if (!nav || nav._boundQuestionNav) return nav;
    nav._boundQuestionNav = true;
    const openQuestionNav = () => {
      window.clearTimeout(nav._questionNavCloseTimer);
      nav.classList.add('is-open');
    };
    const closeQuestionNavSoon = () => {
      window.clearTimeout(nav._questionNavCloseTimer);
      nav._questionNavCloseTimer = window.setTimeout(() => {
        nav.classList.remove('is-open');
      }, 180);
    };
    nav.addEventListener('mouseenter', openQuestionNav);
    nav.addEventListener('mouseover', openQuestionNav);
    nav.addEventListener('mouseleave', closeQuestionNavSoon);
    nav.addEventListener('click', (event) => {
      const trigger =
        event.target && event.target.closest
          ? event.target.closest('.chat-question-nav-trigger')
          : null;
      if (trigger) {
        event.preventDefault();
        nav.classList.toggle('is-open');
        return;
      }
      const btn =
        event.target && event.target.closest
          ? event.target.closest('.chat-question-nav-item')
          : null;
      if (!btn) return;
      const targetId = btn.getAttribute('data-target-id') || '';
      const target = targetId ? document.getElementById(targetId) : null;
      const history = root.querySelector('#chat-history');
      if (!target || !history) return;
      event.preventDefault();
      fastScrollElementTo(history, Math.max(target.offsetTop - 12, 0), 120);
      target.classList.add('is-chat-jump-highlight');
      window.setTimeout(() => {
        target.classList.remove('is-chat-jump-highlight');
      }, 1400);
      nav.classList.remove('is-open');
      setActiveQuestionNavItem(nav, targetId);
    });
    if (historyDiv && !historyDiv._boundQuestionNavScroll) {
      historyDiv._boundQuestionNavScroll = true;
      historyDiv.addEventListener('scroll', () => syncActiveQuestionNav(nav, historyDiv));
    }
    return nav;
  };

  const summarizeQuestionForNav = (text) => {
    const normalized = String(text || '').replace(/\s+/g, ' ').trim();
    if (!normalized) return '';
    const detail = parseUserQuestionWithQuotes(text).question.replace(/\s+/g, ' ').trim();
    const source = detail || normalized;
    return source.length > 34 ? `${source.slice(0, 34)}...` : source;
  };

  const summarizeQuestionQuoteForNav = (text) => {
    const quote = parseUserQuestionWithQuotes(text).quotes
      .map((item) => normalizeInlineQuoteText(item))
      .filter(Boolean)
      .join(' ');
    if (!quote) return '';
    return quote.length > 52 ? `${quote.slice(0, 52)}...` : quote;
  };

  const collectQuestionNavItems = (historyDiv) => {
    if (!historyDiv || !historyDiv.querySelectorAll) return [];
    return Array.from(historyDiv.querySelectorAll('.msg-item'))
      .map((item) => {
        const content = item.querySelector('.msg-content-user');
        if (!content) return null;
        return { item, content };
      })
      .filter(Boolean)
      .map(({ item, content }, index) => {
        if (!item.id) item.id = `user-question-${index}`;
        item.dataset.questionIndex = String(index);
        const fullText = String(
          content._chatRawText ||
          (content.dataset && content.dataset.chatRawText) ||
          content.innerText ||
          content.textContent ||
          '',
        ).trim();
        return {
          id: item.id,
          index,
          title: fullText,
          label: summarizeQuestionForNav(fullText) || `问题 ${index + 1}`,
          quote: summarizeQuestionQuoteForNav(fullText),
        };
      });
  };

  const setActiveQuestionNavItem = (nav, targetId) => {
    if (!nav) return;
    nav.querySelectorAll('.chat-question-nav-item').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-target-id') === targetId);
    });
  };

  const syncActiveQuestionNav = (nav, historyDiv) => {
    if (!nav || !historyDiv) return;
    const items = Array.from(historyDiv.querySelectorAll('.msg-item[data-question-index]'));
    if (!items.length) return;
    const scrollLine = historyDiv.scrollTop + 24;
    let active = items[0];
    items.forEach((item) => {
      if (item.offsetTop <= scrollLine) active = item;
    });
    setActiveQuestionNavItem(nav, active.id || '');
  };

  const renderQuestionNav = () => {
    const nav = ensureQuestionNavContainer();
    const root = getChatRoot();
    const historyDiv = root && root.querySelector('#chat-history');
    if (!nav || !historyDiv) return;

    const items = collectQuestionNavItems(historyDiv);
    if (!items.length) {
      nav.hidden = true;
      nav.innerHTML = '';
      return;
    }

    nav.hidden = false;
    nav.innerHTML = '';

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'chat-question-nav-trigger';
    trigger.setAttribute('aria-haspopup', 'true');
    const triggerText = document.createElement('span');
    triggerText.className = 'chat-question-nav-trigger-text';
    triggerText.textContent = `问题导航 · ${items.length}`;
    trigger.appendChild(triggerText);
    nav.appendChild(trigger);

    const menu = document.createElement('div');
    menu.className = 'chat-question-nav-menu';
    const list = document.createElement('div');
    list.className = 'chat-question-nav-list';
    list.setAttribute('role', 'list');
    items.forEach((entry) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chat-question-nav-item';
      btn.setAttribute('role', 'listitem');
      btn.setAttribute('data-target-id', entry.id);
      btn.title = entry.title || entry.label;
      const index = document.createElement('span');
      index.className = 'chat-question-nav-index';
      index.textContent = String(entry.index + 1);
      btn.appendChild(index);

      const body = document.createElement('span');
      body.className = 'chat-question-nav-body';

      const text = document.createElement('span');
      text.className = 'chat-question-nav-text';
      text.textContent = entry.label;
      body.appendChild(text);

      if (entry.quote) {
        const quote = document.createElement('span');
        quote.className = 'chat-question-nav-quote';
        quote.textContent = `引用：${entry.quote}`;
        body.appendChild(quote);
      }

      btn.appendChild(body);
      list.appendChild(btn);
    });
    menu.appendChild(list);
    nav.appendChild(menu);
    syncActiveQuestionNav(nav, historyDiv);
  };

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
  let chatQuoteSelection = null;
  let chatQuoteSelectionTimer = 0;
  let chatQuoteLastTouchAt = 0;
  let chatQuoteSelectionBound = false;
  let pendingQuoteBlocks = [];

  const normalizeQuoteText = (text) =>
    String(text || '')
      .replace(/\u00a0/g, ' ')
      .replace(/\r\n?/g, '\n')
      .split('\n')
      .map((line) => line.trim())
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

  const formatQuotedInput = (text) => {
    const normalized = normalizeQuoteText(text);
    if (!normalized) return '';
    const lines = normalized.split('\n').map((line) => (line ? `> ${line}` : '>'));
    return `${lines.join('\n')}\n\n`;
  };

  const previewQuoteText = (text) => {
    const normalized = normalizeQuoteText(text).replace(/\s+/g, ' ');
    return normalized.length > 180 ? `${normalized.slice(0, 180)}...` : normalized;
  };

  const ensureChatQuoteStack = (root) => {
    const r = root || getChatRoot();
    if (!r) return null;
    let stack = r.querySelector('#chat-input-quote-stack');
    const input = r.querySelector('#user-input');
    if (!stack) {
      stack = document.createElement('div');
      stack.id = 'chat-input-quote-stack';
      stack.className = 'chat-input-quote-stack';
      stack.setAttribute('aria-live', 'polite');
      stack.hidden = true;
      const inputArea = r.querySelector('.input-area');
      const panelBody = r.querySelector('.paper-chat-panel-body');
      if (panelBody && inputArea) {
        panelBody.insertBefore(stack, inputArea);
      } else if (inputArea && input) {
        inputArea.insertBefore(stack, input);
      }
    }
    if (!stack || stack._boundQuoteStack) return stack;
    stack._boundQuoteStack = true;
    stack.addEventListener('click', (event) => {
      const removeBtn =
        event.target && event.target.closest
          ? event.target.closest('[data-chat-quote-remove]')
          : null;
      if (!removeBtn) return;
      event.preventDefault();
      const quoteId = removeBtn.getAttribute('data-chat-quote-remove') || '';
      pendingQuoteBlocks = pendingQuoteBlocks.filter((item) => item.id !== quoteId);
      renderPendingQuoteStack(r);
      const inputEl = r.querySelector('#user-input');
      if (inputEl && !inputEl.disabled) inputEl.focus();
    });
    return stack;
  };

  const renderPendingQuoteStack = (root) => {
    const r = root || getChatRoot();
    const stack = ensureChatQuoteStack(r);
    if (!stack) return;
    stack.innerHTML = '';
    if (!pendingQuoteBlocks.length) {
      stack.hidden = true;
      return;
    }
    stack.hidden = false;
    pendingQuoteBlocks.forEach((quote) => {
      const card = document.createElement('div');
      card.className = 'chat-input-quote-card';

      const icon = document.createElement('span');
      icon.className = 'chat-input-quote-enter-key';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '↵';

      const body = document.createElement('div');
      body.className = 'chat-input-quote-body';
      const text = document.createElement('div');
      text.className = 'chat-input-quote-text';
      text.textContent = previewQuoteText(quote.text);
      body.appendChild(text);

      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'chat-input-quote-remove';
      remove.setAttribute('data-chat-quote-remove', quote.id);
      remove.setAttribute('aria-label', '移除引用');
      remove.textContent = '×';

      card.appendChild(icon);
      card.appendChild(body);
      card.appendChild(remove);
      stack.appendChild(card);
    });
  };

  const clearPendingQuoteBlocks = (options = {}) => {
    pendingQuoteBlocks = [];
    if (options.render !== false) renderPendingQuoteStack();
  };

  const buildQuestionWithPendingQuotes = (typedQuestion) => {
    const typed = String(typedQuestion || '').trim();
    const quoteText = pendingQuoteBlocks
      .map((quote) => formatQuotedInput(quote.text).trimEnd())
      .filter(Boolean)
      .join('\n\n');
    return [quoteText, typed].filter(Boolean).join('\n\n').trim();
  };

  const quoteToInput = (text, options = {}) => {
    const normalized = normalizeQuoteText(text);
    if (!normalized) return false;

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
    pendingQuoteBlocks.push(normalizeQuoteBlockMeta({
      id: `quote-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      source: options.source === 'chat' ? 'chat' : 'paper',
      text: normalized,
      paperId: options.paperId,
      messageKey: options.messageKey,
      highlightId: options.highlightId,
      start: options.start,
      end: options.end,
    }, normalized));
    renderPendingQuoteStack(root);
    resizeChatInput(input);
    input.focus();
    setChatStatus('');
    return true;
  };

  const getElementFromRangeNode = (node) => {
    if (!node) return null;
    return node.nodeType === 1 ? node : node.parentElement;
  };

  const getChatSelectableContent = (node) => {
    const el = getElementFromRangeNode(node);
    return el && el.closest ? el.closest('#chat-history .msg-content') : null;
  };

  const getChatHighlightableContent = (node) => {
    const el = getElementFromRangeNode(node);
    if (!el || !el.closest) return null;
    const content = el.closest('#chat-history .msg-content-ai, #chat-history .msg-content-user');
    if (!content || content.closest('.thinking-container, .thinking-history-container')) return null;
    return content.dataset && content.dataset.chatMessageKey ? content : null;
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

  const getChatPointFromEvent = (event) => {
    if (!event) return null;
    const touch =
      event.changedTouches && event.changedTouches.length
        ? event.changedTouches[0]
        : event.touches && event.touches.length
          ? event.touches[0]
          : null;
    const source = touch || event;
    const x = Number(source && source.clientX);
    const y = Number(source && source.clientY);
    return Number.isFinite(x) && Number.isFinite(y) ? { x, y } : null;
  };

  const getChatRangePopoverPoint = (range, fallbackPoint) => {
    const rects =
      range && range.getClientRects ? Array.from(range.getClientRects()) : [];
    const rect =
      rects.find((item) => item && (item.width || item.height)) ||
      (range && range.getBoundingClientRect ? range.getBoundingClientRect() : null);
    if (rect && Number.isFinite(rect.left) && Number.isFinite(rect.bottom)) {
      return {
        x: rect.left + (rect.width || 0) / 2,
        y: rect.bottom + 8,
      };
    }
    return fallbackPoint || {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
  };

  const isLikelyChatTouchDevice = () => {
    try {
      return (
        (navigator && Number(navigator.maxTouchPoints) > 0) ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
      );
    } catch {
      return false;
    }
  };

  const hideChatQuotePopover = () => {
    chatQuoteSelectionText = '';
    chatQuoteSelection = null;
    if (chatQuotePopover) {
      chatQuotePopover.classList.remove('is-open');
    }
  };

  const clearChatTextSelection = () => {
    const selection = window.getSelection && window.getSelection();
    if (selection && selection.removeAllRanges) selection.removeAllRanges();
  };

  const getChatQuoteTextFromPopover = (popover) => {
    if (!popover) return '';
    if (popover.dataset.mode === 'edit') {
      const item = getChatHighlightById(popover.dataset.highlightId || '');
      return item ? item.text : '';
    }
    return chatQuoteSelectionText;
  };

  const getChatQuoteOptionsFromPopover = (popover) => {
    const base = { source: 'chat' };
    if (!popover) return base;
    if (popover.dataset.mode === 'edit') {
      const item = getChatHighlightById(popover.dataset.highlightId || '');
      if (!item) return base;
      return {
        source: 'chat',
        messageKey: item.messageKey,
        highlightId: item.id,
        start: item.start,
        end: item.end,
      };
    }
    if (!chatQuoteSelection) return base;
    return {
      source: 'chat',
      messageKey: chatQuoteSelection.messageKey,
      start: chatQuoteSelection.start,
      end: chatQuoteSelection.end,
    };
  };

  const getQuoteJumpNeedles = (text) => {
    const normalized = normalizeInlineQuoteText(text);
    if (!normalized) return [];
    const candidates = [normalized];
    if (normalized.length > 140) {
      candidates.push(normalized.slice(0, 140), normalized.slice(-140));
    }
    if (normalized.length > 80) {
      candidates.push(normalized.slice(0, 80));
    }
    return Array.from(new Set(candidates.filter((item) => item.length >= 8)));
  };

  const getQuoteJumpTextNodes = (root, options = {}) => {
    const ignoredSelector = options.ignoredSelector || 'script, style, textarea, input, button';
    const excluded = Array.isArray(options.exclude) ? options.exclude.filter(Boolean) : [];
    const textNodes = [];
    if (!root || !document.createTreeWalker || !window.NodeFilter) {
      return textNodes;
    }
    const nodeFilter = window.NodeFilter;
    const walker = document.createTreeWalker(root, nodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node && node.parentElement;
        if (!parent) return nodeFilter.FILTER_REJECT;
        if (excluded.some((el) => el && el.contains && el.contains(parent))) {
          return nodeFilter.FILTER_REJECT;
        }
        if (parent.closest && parent.closest(ignoredSelector)) {
          return nodeFilter.FILTER_REJECT;
        }
        return nodeFilter.FILTER_ACCEPT;
      },
    });
    let node = walker.nextNode();
    while (node) {
      textNodes.push(node);
      node = walker.nextNode();
    }
    return textNodes;
  };

  const createRangeFromQuoteOffsets = (root, start, end, options = {}) => {
    const textNodes = getQuoteJumpTextNodes(root, options);
    const rangeStart = Number(start);
    const rangeEnd = Number(end);
    const total = textNodes.reduce((sum, node) => sum + String(node.nodeValue || '').length, 0);
    if (
      !document.createRange ||
      !Number.isFinite(rangeStart) ||
      !Number.isFinite(rangeEnd) ||
      rangeEnd <= rangeStart ||
      rangeStart < 0 ||
      rangeEnd > total
    ) {
      return null;
    }

    const locate = (offset) => {
      let cursor = 0;
      for (const node of textNodes) {
        const value = String(node.nodeValue || '');
        const next = cursor + value.length;
        if (offset <= next) {
          return {
            node,
            offset: Math.max(0, Math.min(value.length, offset - cursor)),
          };
        }
        cursor = next;
      }
      const last = textNodes[textNodes.length - 1];
      return last ? { node: last, offset: String(last.nodeValue || '').length } : null;
    };

    const startPos = locate(rangeStart);
    const endPos = locate(rangeEnd);
    if (!startPos || !endPos) return null;
    const range = document.createRange();
    try {
      range.setStart(startPos.node, startPos.offset);
      range.setEnd(endPos.node, endPos.offset);
      return range;
    } catch {
      return null;
    }
  };

  const buildQuoteJumpTextIndex = (root, options = {}) => {
    const textNodes = getQuoteJumpTextNodes(root, options);
    if (!textNodes.length) return { text: '', map: [] };

    let text = '';
    const map = [];
    let lastWasSpace = true;
    textNodes.forEach((node) => {
      const value = String(node.nodeValue || '');
      for (let i = 0; i < value.length; i += 1) {
        const ch = value[i];
        if (/\s/.test(ch)) {
          if (text && !lastWasSpace) {
            text += ' ';
            map.push({ node, offset: i });
            lastWasSpace = true;
          }
          continue;
        }
        text += ch;
        map.push({ node, offset: i });
        lastWasSpace = false;
      }
    });
    return { text, map };
  };

  const findQuoteJumpRange = (root, quoteText, options = {}) => {
    const needles = getQuoteJumpNeedles(quoteText);
    if (!needles.length) return null;
    const index = buildQuoteJumpTextIndex(root, options);
    if (!index.text || !index.map.length) return null;
    let foundAt = -1;
    let foundNeedle = '';
    needles.some((needle) => {
      const at = index.text.indexOf(needle);
      if (at < 0) return false;
      foundAt = at;
      foundNeedle = needle;
      return true;
    });
    if (foundAt < 0 || !foundNeedle) return null;
    const start = index.map[foundAt];
    const end = index.map[foundAt + foundNeedle.length - 1];
    if (!start || !end || !document.createRange) return null;
    const range = document.createRange();
    try {
      range.setStart(start.node, start.offset);
      range.setEnd(end.node, end.offset + 1);
      return range;
    } catch {
      return null;
    }
  };

  const getQuoteJumpTargetElement = (range) => {
    const start = range && range.startContainer;
    const parent = start && (start.nodeType === 1 ? start : start.parentElement);
    if (!parent || !parent.closest) return parent || null;
    return (
      parent.closest(
        'p, li, blockquote, figcaption, td, th, h1, h2, h3, h4, h5, h6, .msg-item',
      ) ||
      parent
    );
  };

  const pulseQuoteJumpTarget = (el) => {
    if (!el || !el.classList) return;
    el.classList.remove('dpr-chat-quote-jump-highlight');
    void el.offsetWidth;
    el.classList.add('dpr-chat-quote-jump-highlight');
    window.setTimeout(() => {
      if (el.classList) el.classList.remove('dpr-chat-quote-jump-highlight');
    }, 1500);
  };

  const scrollWindowToQuoteRange = (range) => {
    if (!range) return false;
    const rect = range.getBoundingClientRect();
    const target = getQuoteJumpTargetElement(range);
    if (rect && Number.isFinite(rect.top)) {
      const top = Math.max(window.scrollY + rect.top - window.innerHeight * 0.28, 0);
      window.scrollTo({ top, behavior: 'smooth' });
    } else if (target && target.scrollIntoView) {
      target.scrollIntoView({ block: 'center', behavior: 'smooth' });
    } else {
      return false;
    }
    pulseQuoteJumpTarget(target);
    return true;
  };

  const jumpToPaperQuote = (quoteText, targetMeta = null) => {
    const root =
      document.querySelector('.markdown-section .dpr-page-content') ||
      document.querySelector('.markdown-section');
    const meta = normalizeQuoteBlockMeta(targetMeta, quoteText);
    if (
      root &&
      meta.source === 'paper' &&
      (!meta.paperId || !activeChatPaperId || meta.paperId === activeChatPaperId) &&
      Number.isFinite(meta.start) &&
      Number.isFinite(meta.end)
    ) {
      const preciseRange = createRangeFromQuoteOffsets(root, meta.start, meta.end, {
        ignoredSelector:
          'script, style, textarea, input, button, #paper-chat-container, .chat-quote-popover, .dpr-highlight-popover',
      });
      if (scrollWindowToQuoteRange(preciseRange)) return true;
    }

    const range = findQuoteJumpRange(root, quoteText, {
      ignoredSelector:
        'script, style, textarea, input, button, #paper-chat-container, .chat-quote-popover, .dpr-highlight-popover',
    });
    return scrollWindowToQuoteRange(range);
  };

  const scrollChatHistoryToQuoteRange = (historyDiv, range) => {
    if (!historyDiv || !range) return false;
    const rect = range.getBoundingClientRect();
    const historyRect = historyDiv.getBoundingClientRect();
    const target = getQuoteJumpTargetElement(range);
    if (rect && historyRect && Number.isFinite(rect.top)) {
      const top = historyDiv.scrollTop + rect.top - historyRect.top - 28;
      fastScrollElementTo(historyDiv, top, 130);
    } else if (target) {
      fastScrollElementTo(historyDiv, Math.max(target.offsetTop - 18, 0), 130);
    } else {
      return false;
    }
    pulseQuoteJumpTarget(target && target.closest ? target.closest('.msg-item') || target : target);
    return true;
  };

  const findChatMessageContentByKey = (historyDiv, messageKey) => {
    if (!historyDiv || !messageKey || !historyDiv.querySelectorAll) return null;
    return Array.from(historyDiv.querySelectorAll('.msg-content[data-chat-message-key]'))
      .find((el) => el.dataset && el.dataset.chatMessageKey === messageKey) || null;
  };

  const jumpToChatQuote = (quoteText, currentItem, targetMeta = null) => {
    const root = getChatRoot();
    const historyDiv = root && root.querySelector('#chat-history');
    if (!historyDiv) return false;
    const meta = normalizeQuoteBlockMeta(targetMeta, quoteText);
    if (
      meta.source === 'chat' &&
      meta.messageKey &&
      Number.isFinite(meta.start) &&
      Number.isFinite(meta.end)
    ) {
      const content = findChatMessageContentByKey(historyDiv, meta.messageKey);
      const preciseRange = createRangeFromQuoteOffsets(content, meta.start, meta.end, {
        ignoredSelector:
          'script, style, textarea, input, button, .chat-quote-popover, .chat-answer-outline, .chat-user-question-quote',
      });
      if (scrollChatHistoryToQuoteRange(historyDiv, preciseRange)) return true;
    }

    const range = findQuoteJumpRange(historyDiv, quoteText, {
      exclude: [currentItem],
      ignoredSelector:
        'script, style, textarea, input, button, .chat-quote-popover, .chat-answer-outline, .chat-user-question-quote',
    });
    return scrollChatHistoryToQuoteRange(historyDiv, range);
  };

  const jumpToUserQuestionQuote = (quoteBtn) => {
    if (!quoteBtn) return false;
    const quoteText =
      quoteBtn._chatQuoteText ||
      quoteBtn.dataset.quoteText ||
      quoteBtn.textContent ||
      '';
    const targetMeta = normalizeQuoteBlockMeta(quoteBtn._chatQuoteTarget, quoteText);
    const source = targetMeta.source || quoteBtn.dataset.quoteSource || 'auto';
    const currentItem = quoteBtn.closest ? quoteBtn.closest('.msg-item') : null;
    let jumped = false;
    if (source === 'paper') {
      jumped = jumpToPaperQuote(quoteText, targetMeta) || jumpToChatQuote(quoteText, currentItem, targetMeta);
    } else {
      jumped = jumpToChatQuote(quoteText, currentItem, targetMeta) || jumpToPaperQuote(quoteText, targetMeta);
    }
    if (!jumped) {
      setChatStatus('没有找到引用位置。', CHAT_SYNC_ERROR_COLOR);
    } else {
      setChatStatus('');
    }
    return jumped;
  };

  const jumpToQuote = (quoteText, targetMeta = {}) => {
    const meta = normalizeQuoteBlockMeta(targetMeta, quoteText);
    if (meta.source === 'paper') {
      return jumpToPaperQuote(quoteText, meta) || jumpToChatQuote(quoteText, null, meta);
    }
    return jumpToChatQuote(quoteText, null, meta) || jumpToPaperQuote(quoteText, meta);
  };

  const handleUserQuestionQuoteJumpClick = (event) => {
    const target = event && event.target;
    const quoteBtn =
      target && target.closest
        ? target.closest('#paper-chat-container .chat-user-question-quote')
        : null;
    if (!quoteBtn) return;
    event.preventDefault();
    event.stopPropagation();
    jumpToUserQuestionQuote(quoteBtn);
  };

  const addChatHighlightFromSelection = (color) => {
    const pending = chatQuoteSelection;
    if (!activeChatPaperId || !pending || !pending.messageKey || pending.end <= pending.start) return;
    const record = getChatHighlightRecord(activeChatPaperId);
    const item = {
      id: `chl-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      messageKey: pending.messageKey,
      start: pending.start,
      end: pending.end,
      text: pending.text,
      color: normalizeChatHighlightColor(color),
      createdAt: chatNowIso(),
      updatedAt: chatNowIso(),
    };
    const next = record.items.filter((old) => (
      old.messageKey !== item.messageKey
      || old.end <= item.start
      || old.start >= item.end
    ));
    next.push(item);
    saveChatHighlightItems(next);
    clearChatTextSelection();
  };

  const updateChatHighlightColor = (id, color) => {
    if (!activeChatPaperId || !id) return;
    const record = getChatHighlightRecord(activeChatPaperId);
    saveChatHighlightItems(
      record.items.map((item) =>
        item.id === id
          ? Object.assign({}, item, {
              color: normalizeChatHighlightColor(color),
              updatedAt: chatNowIso(),
            })
          : item,
      ),
    );
  };

  const deleteChatHighlight = (id) => {
    if (!activeChatPaperId || !id) return;
    const record = getChatHighlightRecord(activeChatPaperId);
    saveChatHighlightItems(record.items.filter((item) => item.id !== id));
  };

  const renderChatQuotePopoverContent = (popover, options = {}) => {
    if (!popover) return;
    const mode = options.mode === 'edit' ? 'edit' : 'new';
    const canHighlight = !!options.canHighlight;
    popover.innerHTML = '';

    if (canHighlight) {
      const row = document.createElement('div');
      row.className = 'chat-highlight-color-row';
      CHAT_HIGHLIGHT_COLORS.forEach((item) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chat-highlight-color-btn';
        btn.setAttribute('data-chat-highlight-color', item.value);
        btn.setAttribute('aria-label', item.label);
        btn.title = item.label;
        btn.style.setProperty('--dpr-chat-highlight-swatch', item.value);
        row.appendChild(btn);
      });
      popover.appendChild(row);

      if (mode === 'edit') {
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'chat-highlight-delete-btn';
        deleteBtn.setAttribute('data-chat-highlight-action', 'delete');
        deleteBtn.textContent = '删除高亮';
        popover.appendChild(deleteBtn);
      }
    }

    const quoteBtn = document.createElement('button');
    quoteBtn.type = 'button';
    quoteBtn.className = 'chat-quote-popover-btn';
    quoteBtn.setAttribute('data-chat-quote-action', 'quote');
    quoteBtn.textContent = '引用';
    popover.appendChild(quoteBtn);

    const noteBtn = document.createElement('button');
    noteBtn.type = 'button';
    noteBtn.className = 'chat-quote-popover-btn';
    noteBtn.setAttribute('data-chat-quote-action', 'note');
    noteBtn.textContent = '引用到笔记';
    popover.appendChild(noteBtn);
  };

  const ensureChatQuotePopover = () => {
    if (chatQuotePopover && document.body.contains(chatQuotePopover)) {
      return chatQuotePopover;
    }
    const popover = document.createElement('div');
    popover.className = 'chat-quote-popover';
    popover.addEventListener('mousedown', (event) => event.preventDefault());
    popover.addEventListener('click', (event) => {
      const quoteBtn =
        event.target && event.target.closest
          ? event.target.closest('[data-chat-quote-action="quote"]')
          : null;
      const noteBtn =
        event.target && event.target.closest
          ? event.target.closest('[data-chat-quote-action="note"]')
          : null;
      const colorBtn =
        event.target && event.target.closest
          ? event.target.closest('[data-chat-highlight-color]')
          : null;
      const deleteBtn =
        event.target && event.target.closest
          ? event.target.closest('[data-chat-highlight-action="delete"]')
          : null;
      if (!quoteBtn && !noteBtn && !colorBtn && !deleteBtn) return;
      event.preventDefault();
      event.stopPropagation();
      if (quoteBtn) {
        const quoted = getChatQuoteTextFromPopover(popover);
        if (quoteToInput(quoted, getChatQuoteOptionsFromPopover(popover))) {
          clearChatTextSelection();
        }
        hideChatQuotePopover();
        return;
      }
      if (noteBtn) {
        const quoted = getChatQuoteTextFromPopover(popover);
        const notebook = window.DPRPaperNotebook;
        if (notebook && typeof notebook.quoteToNotebook === 'function') {
          notebook.quoteToNotebook(quoted, getChatQuoteOptionsFromPopover(popover));
          clearChatTextSelection();
        }
        hideChatQuotePopover();
        return;
      }
      if (colorBtn) {
        const color = colorBtn.getAttribute('data-chat-highlight-color') || '';
        if (popover.dataset.mode === 'edit') {
          updateChatHighlightColor(popover.dataset.highlightId || '', color);
        } else {
          addChatHighlightFromSelection(color);
        }
        hideChatQuotePopover();
        return;
      }
      if (deleteBtn) {
        deleteChatHighlight(popover.dataset.highlightId || '');
        hideChatQuotePopover();
      }
    });
    document.body.appendChild(popover);
    chatQuotePopover = popover;
    return popover;
  };

  const showChatQuotePopover = (text, x, y, options = {}) => {
    chatQuoteSelectionText = normalizeQuoteText(text);
    chatQuoteSelection = options.selection || null;
    if (!chatQuoteSelectionText) {
      hideChatQuotePopover();
      return;
    }
    const popover = ensureChatQuotePopover();
    popover.dataset.mode = options.mode === 'edit' ? 'edit' : 'new';
    popover.dataset.highlightId = options.highlightId || '';
    renderChatQuotePopoverContent(popover, {
      mode: popover.dataset.mode,
      canHighlight: !!(options.canHighlight || chatQuoteSelection),
    });
    popover.classList.add('is-open');
    requestAnimationFrame(() => clampChatQuotePopoverPosition(x, y, popover));
  };

  const showChatPopoverForCurrentSelection = (fallbackPoint) => {
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

    let highlightSelection = null;
    const startHighlightContent = getChatHighlightableContent(range.startContainer);
    const endHighlightContent = getChatHighlightableContent(range.endContainer);
    if (
      startHighlightContent
      && startHighlightContent === endHighlightContent
      && rangeInsideChatContent(range, startHighlightContent)
    ) {
      const pending = getChatRangeOffsets(range, startHighlightContent);
      if (pending.text && pending.text.trim() && pending.end > pending.start) {
        highlightSelection = Object.assign({}, pending, {
          messageKey: startHighlightContent.dataset.chatMessageKey || '',
        });
      }
    }

    const point = getChatRangePopoverPoint(range, fallbackPoint);
    showChatQuotePopover(selectedText, point.x, point.y, {
      selection: highlightSelection,
    });
  };

  const scheduleChatQuoteSelectionPopover = (event, delay = 0) => {
    const target = event && event.target;
    if (target && target.closest && target.closest('.chat-quote-popover')) return;
    if (target && target.closest && target.closest('.dpr-chat-text-highlight')) return;
    if (target && target.closest && target.closest('textarea,input,select,button')) {
      hideChatQuotePopover();
      return;
    }
    const fallbackPoint = getChatPointFromEvent(event);
    window.clearTimeout(chatQuoteSelectionTimer);
    chatQuoteSelectionTimer = window.setTimeout(() => {
      showChatPopoverForCurrentSelection(fallbackPoint);
    }, delay);
  };

  const handleChatHistorySelectionMouseUp = (event) => {
    scheduleChatQuoteSelectionPopover(event, 0);
  };

  const handleChatHistorySelectionTouchEnd = (event) => {
    chatQuoteLastTouchAt = Date.now();
    scheduleChatQuoteSelectionPopover(event, 180);
  };

  const handleChatHistorySelectionPointerUp = (event) => {
    if (!event || (event.pointerType !== 'touch' && event.pointerType !== 'pen')) return;
    chatQuoteLastTouchAt = Date.now();
    scheduleChatQuoteSelectionPopover(event, 180);
  };

  const handleChatHistorySelectionChange = () => {
    if (!isLikelyChatTouchDevice() && Date.now() - chatQuoteLastTouchAt > 1200) return;
    window.clearTimeout(chatQuoteSelectionTimer);
    chatQuoteSelectionTimer = window.setTimeout(() => {
      showChatPopoverForCurrentSelection(null);
    }, 220);
  };

  const handleChatHighlightClick = (event) => {
    const target = event && event.target;
    const mark = target && target.closest ? target.closest('.dpr-chat-text-highlight') : null;
    if (!mark) return;
    const content = mark.closest && mark.closest('#chat-history .msg-content[data-chat-message-key]');
    if (!content) return;
    const item = getChatHighlightById(mark.dataset.chatHighlightId || '');
    if (!item) return;
    event.preventDefault();
    event.stopPropagation();
    clearChatTextSelection();
    showChatQuotePopover(item.text, event.clientX || window.innerWidth / 2, (event.clientY || window.innerHeight / 2) + 12, {
      mode: 'edit',
      highlightId: item.id,
      canHighlight: true,
    });
  };

  const bindChatQuoteSelectionEventsOnce = () => {
    if (chatQuoteSelectionBound) return;
    chatQuoteSelectionBound = true;

    document.addEventListener('mouseup', handleChatHistorySelectionMouseUp, true);
    document.addEventListener('touchend', handleChatHistorySelectionTouchEnd, true);
    document.addEventListener('pointerup', handleChatHistorySelectionPointerUp, true);
    document.addEventListener('selectionchange', handleChatHistorySelectionChange, true);
    document.addEventListener('click', handleUserQuestionQuoteJumpClick, true);
    document.addEventListener('click', handleChatHighlightClick, true);
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

    const typedQuestion = input.value.trim();
    const question = buildQuestionWithPendingQuotes(typedQuestion);
    let paperContent = '';

    if (!question) {
      if (statusEl) {
        statusEl.textContent = '请输入问题后再发送。';
        statusEl.style.color = '#c00';
      }
      return;
    }

    resetChatInput(input);
    const outgoingQuoteBlocks = pendingQuoteBlocks.map((quote) =>
      normalizeQuoteBlockMeta(quote, quote && quote.text),
    );
    clearPendingQuoteBlocks();

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
    recordRecentQuestion(typedQuestion || question);
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
    let liveUserItem = null;
    let liveUserContent = null;
    try {
      const userItem = document.createElement('div');
      userItem.className = 'msg-item';

      const time = document.createElement('span');
      time.className = 'msg-time msg-time-user';
      time.textContent = nowStr;

      const content = document.createElement('div');
      content.className = 'msg-content msg-content-user';
      renderUserQuestionContent(content, question, outgoingQuoteBlocks);

      userItem.appendChild(time);
      userItem.appendChild(content);
      historyDiv.appendChild(userItem);
      liveUserItem = userItem;
      liveUserContent = content;
    } catch {
      // 回退：至少不要把用户输入当作 HTML 注入
      const userItem = document.createElement('div');
      userItem.className = 'msg-item';
      const content = document.createElement('div');
      content.className = 'msg-content msg-content-user';
      renderUserQuestionContent(content, question, outgoingQuoteBlocks);
      userItem.appendChild(content);
      historyDiv.appendChild(userItem);
      liveUserItem = userItem;
      liveUserContent = content;
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
      quotes: outgoingQuoteBlocks,
    });
    await saveChatHistory(paperId, history);
    assignChatMessageIdentity(
      liveUserItem,
      liveUserContent,
      history[history.length - 1],
      history,
      history.length - 1,
    );

    // 更新问题导航（新增了用户提问）
    renderQuestionNav();

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
        disableChatHeadingPageAnchors(thinkingContent);
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
        disableChatHeadingPageAnchors(aiAnswerDiv);
      } else {
        aiAnswerDiv.textContent = content;
      }
      if (renderMathInEl) {
        renderMathInEl(aiAnswerDiv);
      }
      scheduleChatAnswerOutlineUpdate();
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
      const savedAiMessage = {
        role: 'ai',
        content: answerBuffer || '（模型未返回内容）',
        time: nowStrAnswer,
        model,
      };
      updated.push(savedAiMessage);
      await saveChatHistory(paperId, updated);
      assignChatMessageIdentity(
        aiItem,
        aiAnswerDiv,
        savedAiMessage,
        updated,
        updated.length - 1,
      );
      renderChatHighlightsForContent(aiAnswerDiv);
      scheduleChatAnswerOutlineUpdate();

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

    activeChatPaperId = paperId;
    removeChatArtifacts();
    clearPendingQuoteBlocks({ render: false });
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
    jumpToQuote,
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
