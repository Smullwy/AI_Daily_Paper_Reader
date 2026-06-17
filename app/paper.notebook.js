// Paper Notebook: local notes, quote capture, image crops, and repo sync.
window.DPRPaperNotebook = (function () {
  const STORAGE_KEY = 'dpr_paper_notebook_v1';
  const AUTO_SYNC_KEY = 'dpr_paper_notebook_auto_sync_v1';
  const NOTEBOOK_DRAWER_WIDTH_KEY = 'dpr_chat_drawer_width_v1';
  const NOTEBOOK_DRAWER_MIN_WIDTH = 340;
  const NOTEBOOK_DRAWER_MAX_WIDTH = 860;
  const NOTEBOOK_DRAWER_DRAG_THRESHOLD = 4;
  const NOTEBOOK_DB_FILENAME = 'notebooks.enc.json';
  const SCHEMA_VERSION = 1;

  const state = {
    paperId: '',
    panel: null,
    toggle: null,
    chatEntry: null,
    divider: null,
    cropModal: null,
    activeTab: 'notes',
    pendingQuotes: [],
    pendingImages: [],
    autoSync: true,
    syncInFlight: false,
    syncTimer: 0,
    crop: null,
    cropDrag: null,
    drawerDrag: null,
    drawerResizeBound: false,
    noteDrag: null,
    splitHeight: 0,
  };

  const nowIso = () => new Date().toISOString();
  const normalizeText = (value) => String(value || '').trim();
  const normalizePaperId = (paperId) =>
    normalizeText(paperId).replace(/^#\//, '').replace(/\.md$/i, '').replace(/\/$/, '');
  const paperIdFromFile = (file) => normalizePaperId(String(file || '').replace(/^docs\//, ''));
  const safeId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;

  const readAutoSync = () => {
    try {
      const raw = window.localStorage && window.localStorage.getItem(AUTO_SYNC_KEY);
      return raw == null ? true : raw !== '0';
    } catch {
      return true;
    }
  };

  const saveAutoSync = (enabled) => {
    state.autoSync = !!enabled;
    try {
      if (window.localStorage) window.localStorage.setItem(AUTO_SYNC_KEY, enabled ? '1' : '0');
    } catch {
      // ignore
    }
  };

  const normalizeQuote = (quote) => {
    const source = quote && quote.source === 'chat'
      ? 'chat'
      : quote && quote.source === 'paper'
        ? 'paper'
        : 'auto';
    const text = String((quote && quote.text) || '').trim();
    if (!text) return null;
    const out = { source, text };
    const start = Number(quote && quote.start);
    const end = Number(quote && quote.end);
    const paperId = normalizePaperId(quote && quote.paperId);
    const messageKey = normalizeText(quote && quote.messageKey);
    const highlightId = normalizeText(quote && quote.highlightId);
    if (Number.isFinite(start) && Number.isFinite(end) && end > start) {
      out.start = start;
      out.end = end;
    }
    if (paperId) out.paperId = paperId;
    if (messageKey) out.messageKey = messageKey;
    if (highlightId) out.highlightId = highlightId;
    return out;
  };

  const getNotebookDrawerMaxWidth = () =>
    Math.max(
      NOTEBOOK_DRAWER_MIN_WIDTH,
      Math.min(NOTEBOOK_DRAWER_MAX_WIDTH, window.innerWidth - 32),
    );

  const clampNotebookDrawerWidth = (width) => {
    const num = Number(width);
    if (!Number.isFinite(num)) return null;
    return Math.round(
      Math.max(NOTEBOOK_DRAWER_MIN_WIDTH, Math.min(getNotebookDrawerMaxWidth(), num)),
    );
  };

  const loadNotebookDrawerWidth = () => {
    try {
      if (!window.localStorage) return null;
      return clampNotebookDrawerWidth(window.localStorage.getItem(NOTEBOOK_DRAWER_WIDTH_KEY));
    } catch {
      return null;
    }
  };

  const saveNotebookDrawerWidth = (width) => {
    const clamped = clampNotebookDrawerWidth(width);
    if (!clamped) return null;
    try {
      if (window.localStorage) {
        window.localStorage.setItem(NOTEBOOK_DRAWER_WIDTH_KEY, String(clamped));
      }
    } catch {
      // ignore
    }
    return clamped;
  };

  const applyNotebookDrawerWidth = (width, options = {}) => {
    const clamped = clampNotebookDrawerWidth(width);
    if (!clamped) return null;
    document.documentElement.style.setProperty('--dpr-chat-drawer-width', `${clamped}px`);
    if (options.persist !== false) saveNotebookDrawerWidth(clamped);
    return clamped;
  };

  const getCurrentNotebookDrawerWidth = () => {
    const panel = state.panel && state.panel.querySelector('.dpr-notebook-panel');
    if (panel) {
      const rect = panel.getBoundingClientRect();
      if (rect && rect.width) return clampNotebookDrawerWidth(rect.width);
    }
    return loadNotebookDrawerWidth() || clampNotebookDrawerWidth(432);
  };

  const normalizeImage = (image) => {
    const src = String((image && image.src) || '').trim();
    if (!src) return null;
    return {
      id: normalizeText(image && image.id) || `img-${safeId()}`,
      src,
      name: normalizeText(image && image.name),
      createdAt: normalizeText(image && image.createdAt) || nowIso(),
    };
  };

  const normalizeNote = (note, index = 0) => {
    const source = note && typeof note === 'object' ? note : {};
    const text = String(source.text || '');
    const quotes = (Array.isArray(source.quotes) ? source.quotes : [])
      .map(normalizeQuote)
      .filter(Boolean);
    const images = (Array.isArray(source.images) ? source.images : [])
      .map(normalizeImage)
      .filter(Boolean);
    if (!text.trim() && !quotes.length && !images.length) return null;
    return {
      id: normalizeText(source.id) || `note-${safeId()}`,
      text,
      quotes,
      images,
      order: Number.isFinite(Number(source.order)) ? Number(source.order) : index,
      createdAt: normalizeText(source.createdAt) || nowIso(),
      updatedAt: normalizeText(source.updatedAt) || nowIso(),
      deleted: !!source.deleted,
    };
  };

  const sortNotes = (notes) => notes.slice().sort((a, b) => {
    const orderA = Number.isFinite(Number(a.order)) ? Number(a.order) : 0;
    const orderB = Number.isFinite(Number(b.order)) ? Number(b.order) : 0;
    if (orderA !== orderB) return orderA - orderB;
    return String(a.createdAt || '').localeCompare(String(b.createdAt || ''));
  });

  const normalizePaperRecord = (record, paperId = '') => {
    const source = record && typeof record === 'object' ? record : {};
    const cleanPaperId = normalizePaperId(source.paperId || paperId);
    const notes = (Array.isArray(source.notes) ? source.notes : [])
      .map((note, index) => normalizeNote(note, index))
      .filter(Boolean);
    return {
      paperId: cleanPaperId,
      notes: sortNotes(notes).map((note, index) => Object.assign({}, note, { order: index })),
      updatedAt: normalizeText(source.updatedAt) || nowIso(),
      syncedAt: normalizeText(source.syncedAt),
      dirty: !!source.dirty,
    };
  };

  const emptyDatabase = () => ({
    schemaVersion: SCHEMA_VERSION,
    updatedAt: nowIso(),
    papers: {},
  });

  const normalizeDatabase = (database) => {
    const source = database && typeof database === 'object' ? database : {};
    const out = emptyDatabase();
    out.updatedAt = normalizeText(source.updatedAt) || out.updatedAt;
    const papers = source.papers && typeof source.papers === 'object' ? source.papers : {};
    Object.keys(papers).forEach((paperId) => {
      const cleanPaperId = normalizePaperId(paperId);
      if (!cleanPaperId) return;
      const record = normalizePaperRecord(papers[paperId], cleanPaperId);
      if (record.notes.length || record.dirty) out.papers[cleanPaperId] = record;
    });
    return out;
  };

  const loadLocalDatabase = () => {
    try {
      if (!window.localStorage) return emptyDatabase();
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return normalizeDatabase(raw ? JSON.parse(raw) : null);
    } catch {
      return emptyDatabase();
    }
  };

  const saveLocalDatabase = (database) => {
    try {
      if (window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeDatabase(database)));
      }
    } catch {
      // ignore
    }
  };

  const getPaperRecord = (paperId = state.paperId) => {
    const db = loadLocalDatabase();
    const cleanPaperId = normalizePaperId(paperId);
    return normalizePaperRecord(db.papers[cleanPaperId], cleanPaperId);
  };

  const setPaperRecord = (paperId, record) => {
    const db = loadLocalDatabase();
    const cleanPaperId = normalizePaperId(paperId);
    if (!cleanPaperId) return;
    db.papers[cleanPaperId] = normalizePaperRecord(record, cleanPaperId);
    db.updatedAt = nowIso();
    saveLocalDatabase(db);
  };

  const markDirty = () => {
    const record = getPaperRecord();
    record.dirty = true;
    record.updatedAt = nowIso();
    setPaperRecord(state.paperId, record);
    scheduleSync();
  };

  const previewText = (text, limit = 180) => {
    const normalized = String(text || '').replace(/\s+/g, ' ').trim();
    return normalized.length > limit ? `${normalized.slice(0, limit)}...` : normalized;
  };

  const bytesToBase64 = (bytes) => {
    const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
    let binary = '';
    for (let i = 0; i < view.length; i += 1) binary += String.fromCharCode(view[i]);
    return btoa(binary);
  };

  const base64ToBytes = (raw) => {
    const binary = atob(String(raw || '').replace(/\s+/g, ''));
    const out = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) out[i] = binary.charCodeAt(i);
    return out;
  };

  const getCrypto = () => {
    const cryptoObj = window.crypto || window.msCrypto || null;
    if (!cryptoObj || !cryptoObj.subtle) throw new Error('Web Crypto AES-GCM 不可用。');
    return cryptoObj;
  };

  const importAesKey = async (keyB64, usages) =>
    getCrypto().subtle.importKey('raw', base64ToBytes(keyB64), { name: 'AES-GCM' }, false, usages);

  const encryptNotebookDatabase = async (database, keyB64, path) => {
    const db = normalizeDatabase(database);
    const cryptoObj = getCrypto();
    const iv = cryptoObj.getRandomValues(new Uint8Array(12));
    const key = await importAesKey(keyB64, ['encrypt']);
    const encoded = new TextEncoder().encode(JSON.stringify(db));
    const cipherBuf = await cryptoObj.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoded);
    return {
      version: 1,
      kind: 'dpr-notebook-database',
      algorithm: 'AES-GCM',
      path,
      updatedAt: db.updatedAt,
      iv: bytesToBase64(iv),
      ciphertext: bytesToBase64(new Uint8Array(cipherBuf)),
    };
  };

  const decryptNotebookDatabase = async (payload, keyB64) => {
    const data = payload && typeof payload === 'object' ? payload : {};
    if (!data.iv || !data.ciphertext) throw new Error('笔记数据库格式不正确。');
    const key = await importAesKey(keyB64, ['decrypt']);
    const plainBuf = await getCrypto().subtle.decrypt(
      { name: 'AES-GCM', iv: base64ToBytes(data.iv) },
      key,
      base64ToBytes(data.ciphertext),
    );
    return normalizeDatabase(JSON.parse(new TextDecoder().decode(plainBuf)));
  };

  const getReaderDatabaseConfig = async ({ create = false } = {}) => {
    const session = window.DPRSecretSession || {};
    if (create && typeof session.ensureReaderDatabaseConfig === 'function') {
      return await session.ensureReaderDatabaseConfig();
    }
    if (typeof session.getReaderDatabaseConfig === 'function') return session.getReaderDatabaseConfig();
    const secret = window.decoded_secret_private || {};
    return secret && typeof secret.reader_database === 'object' ? secret.reader_database : null;
  };

  const canSyncToRepo = () => (
    String(window.DPR_ACCESS_MODE || '').toLowerCase() === 'full' &&
    window.SubscriptionsGithubToken &&
    typeof window.SubscriptionsGithubToken.loadRepoTextFile === 'function' &&
    typeof window.SubscriptionsGithubToken.commitRepoChanges === 'function'
  );

  const deriveNotebookPath = (readerPath) => {
    const clean = normalizeText(readerPath || 'docs/reader-db/state.enc.json')
      .replace(/^\/+/, '')
      .replace(/\/{2,}/g, '/');
    const parts = clean.split('/').filter(Boolean);
    if (parts.length <= 1) return `docs/reader-db/${NOTEBOOK_DB_FILENAME}`;
    parts.pop();
    return `${parts.join('/') || 'docs/reader-db'}/${NOTEBOOK_DB_FILENAME}`;
  };

  const resolveRemoteConfig = async ({ create = false } = {}) => {
    if (!canSyncToRepo()) return null;
    const cfg = await getReaderDatabaseConfig({ create });
    if (!cfg || cfg.enabled === false || !cfg.key_b64) return null;
    return {
      path: deriveNotebookPath(cfg.path),
      key_b64: String(cfg.key_b64 || '').trim(),
    };
  };

  const loadRemoteDatabase = async (cfg) => {
    const api = window.SubscriptionsGithubToken;
    try {
      const file = await api.loadRepoTextFile(cfg.path, { requireWorkflow: false });
      return await decryptNotebookDatabase(JSON.parse(file.content || '{}'), cfg.key_b64);
    } catch (err) {
      const msg = String((err && err.message) || err || '');
      if (msg.includes('HTTP 404')) return emptyDatabase();
      throw err;
    }
  };

  const mergePaperRecords = (remoteRecord, localRecord) => {
    const remote = normalizePaperRecord(remoteRecord);
    const local = normalizePaperRecord(localRecord, remote.paperId || localRecord.paperId);
    const byId = new Map();
    remote.notes.forEach((note) => byId.set(note.id, note));
    local.notes.forEach((note) => {
      const old = byId.get(note.id);
      if (!old || String(note.updatedAt || '') >= String(old.updatedAt || '')) byId.set(note.id, note);
    });
    const notes = sortNotes(Array.from(byId.values()))
      .map((note, index) => Object.assign({}, note, { order: index }));
    return {
      paperId: local.paperId || remote.paperId,
      notes,
      updatedAt: [remote.updatedAt, local.updatedAt, nowIso()].filter(Boolean).sort().pop(),
      syncedAt: remote.syncedAt || local.syncedAt,
      dirty: !!local.dirty,
    };
  };

  const mergeDatabases = (remoteDb, localDb) => {
    const remote = normalizeDatabase(remoteDb);
    const local = normalizeDatabase(localDb);
    const out = emptyDatabase();
    const ids = new Set([...Object.keys(remote.papers), ...Object.keys(local.papers)]);
    ids.forEach((paperId) => {
      out.papers[paperId] = mergePaperRecords(remote.papers[paperId], local.papers[paperId] || { paperId });
    });
    out.updatedAt = [remote.updatedAt, local.updatedAt, nowIso()].filter(Boolean).sort().pop();
    return out;
  };

  const setStatus = (text, tone = '') => {
    const el = state.panel && state.panel.querySelector('[data-notebook-status]');
    if (!el) return;
    el.textContent = text || '';
    el.dataset.tone = tone || '';
  };

  const loadRemoteAndMerge = async () => {
    if (!canSyncToRepo()) return;
    const cfg = await resolveRemoteConfig({ create: false });
    if (!cfg) return;
    try {
      const remoteDb = await loadRemoteDatabase(cfg);
      const localDb = loadLocalDatabase();
      const merged = mergeDatabases(remoteDb, localDb);
      saveLocalDatabase(merged);
      setStatus('已拉取远程笔记。', 'success');
      render();
    } catch (err) {
      setStatus(`拉取失败，下次打开重试：${(err && err.message) || err}`, 'error');
    }
  };

  const syncNow = async (options = {}) => {
    if (!state.autoSync || state.syncInFlight || !canSyncToRepo()) return false;
    const localDb = loadLocalDatabase();
    const localRecord = localDb.papers[state.paperId];
    if (!options.force && (!localRecord || !localRecord.dirty)) return false;
    state.syncInFlight = true;
    setStatus('正在同步笔记...', 'busy');
    try {
      const cfg = await resolveRemoteConfig({ create: true });
      if (!cfg) throw new Error('未找到 reader database 加密配置。');
      const remoteDb = await loadRemoteDatabase(cfg);
      const merged = mergeDatabases(remoteDb, localDb);
      const current = merged.papers[state.paperId];
      if (current) {
        current.dirty = false;
        current.syncedAt = nowIso();
        current.updatedAt = current.updatedAt || nowIso();
      }
      merged.updatedAt = nowIso();
      const encrypted = await encryptNotebookDatabase(merged, cfg.key_b64, cfg.path);
      const safeSlug = (state.paperId || 'paper').split('/').pop().replace(/[^A-Za-z0-9_.-]+/g, '-') || 'paper';
      await window.SubscriptionsGithubToken.commitRepoChanges(
        { updates: [{ path: cfg.path, content: `${JSON.stringify(encrypted, null, 2)}\n` }], deletes: [] },
        `chore: sync paper notebook for ${safeSlug}`,
        { requireWorkflow: false },
      );
      saveLocalDatabase(merged);
      setStatus('笔记已同步。', 'success');
      render();
      return true;
    } catch (err) {
      setStatus(`同步失败，下次打开重试：${(err && err.message) || err}`, 'error');
      return false;
    } finally {
      state.syncInFlight = false;
    }
  };

  const scheduleSync = () => {
    if (!state.autoSync) return;
    window.clearTimeout(state.syncTimer);
    state.syncTimer = window.setTimeout(() => syncNow({ silent: true }), 1200);
  };

  const jumpToQuote = (quote) => {
    const meta = normalizeQuote(quote);
    if (!meta) return false;
    const highlights = window.DPRPaperHighlights;
    const shouldTryPaperFirst =
      meta.source === 'paper' ||
      (!!meta.highlightId && meta.source !== 'chat') ||
      (!meta.messageKey && Number.isFinite(meta.start) && Number.isFinite(meta.end));
    if (
      shouldTryPaperFirst &&
      highlights &&
      typeof highlights.jumpToHighlight === 'function' &&
      highlights.jumpToHighlight(meta)
    ) {
      return true;
    }
    const chat = window.PrivateDiscussionChat;
    if (chat && typeof chat.jumpToQuote === 'function') {
      const ok = chat.jumpToQuote(meta.text, meta);
      if (ok) return true;
    }
    if (
      !shouldTryPaperFirst &&
      highlights &&
      typeof highlights.jumpToHighlight === 'function'
    ) {
      return highlights.jumpToHighlight(meta);
    }
    return false;
  };

  const ensurePanel = () => {
    if (state.panel && document.body.contains(state.panel)) return state.panel;
    const root = document.createElement('div');
    root.id = 'dpr-paper-notebook';
    root.className = 'dpr-paper-notebook';
    root.innerHTML = `
      <button class="dpr-notebook-toggle-btn" type="button" aria-controls="dpr-notebook-panel" aria-expanded="false">
        <span class="dpr-notebook-toggle-dot" aria-hidden="true"></span>
        <span>笔记本</span>
      </button>
      <aside id="dpr-notebook-panel" class="dpr-notebook-panel" aria-hidden="true" aria-label="论文笔记本">
        <header class="dpr-notebook-head">
          <div>
            <div class="dpr-notebook-eyebrow">Notebook</div>
            <div class="dpr-notebook-title">论文笔记本</div>
          </div>
          <label class="dpr-notebook-sync-toggle" title="关闭后不自动同步到仓库">
            <input type="checkbox" data-notebook-autosync /> 自动同步
          </label>
          <button class="dpr-notebook-close" type="button" aria-label="关闭笔记本">&times;</button>
        </header>
        <div class="dpr-notebook-tabs" role="tablist">
          <button type="button" data-notebook-tab="notes">笔记</button>
          <button type="button" data-notebook-tab="highlights">高亮</button>
        </div>
        <div class="dpr-notebook-body" data-notebook-body></div>
        <div class="dpr-notebook-composer" data-notebook-composer>
          <div class="dpr-notebook-pending" data-notebook-pending></div>
          <textarea data-notebook-input rows="2" placeholder="写笔记，Enter 保存，Shift+Enter 换行"></textarea>
          <div class="dpr-notebook-composer-actions">
            <button type="button" data-notebook-image>插入图片</button>
            <button type="button" data-notebook-save>保存笔记</button>
            <span data-notebook-status class="dpr-notebook-status"></span>
            <input type="file" accept="image/*" data-notebook-file hidden />
          </div>
        </div>
      </aside>
      <div class="dpr-notebook-split-divider" data-notebook-divider title="拖动调整上下分栏"></div>
    `;
    document.body.appendChild(root);
    state.panel = root;
    state.toggle = root.querySelector('.dpr-notebook-toggle-btn');
    state.divider = root.querySelector('[data-notebook-divider]');
    bindPanel(root);
    return root;
  };

  const removeChatEntry = () => {
    document.querySelectorAll('#dpr-notebook-chat-entry').forEach((entry) => entry.remove());
    state.chatEntry = null;
  };

  const ensureCropModal = () => {
    if (state.cropModal && document.body.contains(state.cropModal)) return state.cropModal;
    const modal = document.createElement('div');
    modal.className = 'dpr-notebook-crop-modal';
    modal.innerHTML = `
      <div class="dpr-notebook-crop-card">
        <div class="dpr-notebook-crop-head">
          <strong>裁剪图片</strong>
          <button type="button" data-crop-cancel>&times;</button>
        </div>
        <div class="dpr-notebook-crop-stage" data-crop-stage>
          <img alt="待裁剪图片" data-crop-image />
          <div class="dpr-notebook-crop-box" data-crop-box><span data-crop-handle></span></div>
        </div>
        <div class="dpr-notebook-crop-actions">
          <button type="button" data-crop-cancel>取消</button>
          <button type="button" data-crop-confirm>确认裁剪</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    state.cropModal = modal;
    bindCropModal(modal);
    return modal;
  };

  const bindPanel = (root) => {
    const toggleBtn = root.querySelector('.dpr-notebook-toggle-btn');
    if (toggleBtn && !toggleBtn._boundNotebookDrawerToggle) {
      toggleBtn._boundNotebookDrawerToggle = true;
      toggleBtn.addEventListener('pointerdown', (event) => {
        if (
          !root.classList.contains('is-open') ||
          window.innerWidth <= 767 ||
          event.button !== 0
        ) {
          return;
        }
        state.drawerDrag = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startWidth: getCurrentNotebookDrawerWidth(),
          dragging: false,
        };
        try {
          toggleBtn.setPointerCapture(event.pointerId);
        } catch {
          // ignore
        }
      });
      toggleBtn.addEventListener('pointermove', (event) => {
        if (!state.drawerDrag || state.drawerDrag.pointerId !== event.pointerId) return;
        const delta = state.drawerDrag.startX - event.clientX;
        if (!state.drawerDrag.dragging && Math.abs(delta) < NOTEBOOK_DRAWER_DRAG_THRESHOLD) {
          return;
        }
        state.drawerDrag.dragging = true;
        event.preventDefault();
        root.classList.add('is-resizing');
        if (document.body && document.body.classList) {
          document.body.classList.add('dpr-notebook-drawer-resizing');
        }
        applyNotebookDrawerWidth(state.drawerDrag.startWidth + delta, { persist: false });
      });
      const finishDrawerDrag = (event) => {
        if (!state.drawerDrag || state.drawerDrag.pointerId !== event.pointerId) return;
        const wasDragging = !!state.drawerDrag.dragging;
        if (wasDragging) {
          event.preventDefault();
          saveNotebookDrawerWidth(getCurrentNotebookDrawerWidth());
          toggleBtn._suppressNextClick = true;
          window.setTimeout(() => {
            toggleBtn._suppressNextClick = false;
          }, 160);
        }
        root.classList.remove('is-resizing');
        if (document.body && document.body.classList) {
          document.body.classList.remove('dpr-notebook-drawer-resizing');
        }
        try {
          toggleBtn.releasePointerCapture(event.pointerId);
        } catch {
          // ignore
        }
        state.drawerDrag = null;
      };
      toggleBtn.addEventListener('pointerup', finishDrawerDrag);
      toggleBtn.addEventListener('pointercancel', finishDrawerDrag);
    }

    if (!state.drawerResizeBound) {
      state.drawerResizeBound = true;
      window.addEventListener('resize', () => {
        const saved = loadNotebookDrawerWidth();
        if (saved) applyNotebookDrawerWidth(saved, { persist: false });
      });
    }

    root.addEventListener('pointerdown', (event) => {
      const handle =
        event.target && event.target.closest
          ? event.target.closest('[data-note-drag-handle]')
          : null;
      if (handle) startNoteDrag(event, handle);
    });

    root.addEventListener('click', (event) => {
      const target = event.target;
      if (target.closest && target.closest('[data-note-drag-handle]')) {
        event.preventDefault();
        return;
      }
      const toggle = target.closest && target.closest('.dpr-notebook-toggle-btn');
      if (toggle) {
        event.preventDefault();
        if (toggle._suppressNextClick) return;
        setOpen(!root.classList.contains('is-open'));
        return;
      }
      if (target.closest && target.closest('.dpr-notebook-close')) {
        setOpen(false);
        return;
      }
      const tab = target.closest && target.closest('[data-notebook-tab]');
      if (tab) {
        state.activeTab = tab.dataset.notebookTab || 'notes';
        render();
        return;
      }
      if (target.closest && target.closest('[data-notebook-save]')) saveComposerNote();
      if (target.closest && target.closest('[data-notebook-image]')) {
        const file = root.querySelector('[data-notebook-file]');
        if (file) file.click();
      }
      const quoteBtn = target.closest && target.closest('[data-notebook-quote-index]');
      if (quoteBtn) {
        const source = quoteBtn._quote || state.pendingQuotes[Number(quoteBtn.dataset.notebookQuoteIndex)];
        if (source) jumpToQuote(source);
      }
      const action = target.closest && target.closest('[data-note-action]');
      if (action) handleNoteAction(action);
    });

    const input = root.querySelector('[data-notebook-input]');
    if (input) {
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
          event.preventDefault();
          saveComposerNote();
        }
      });
    }

    const file = root.querySelector('[data-notebook-file]');
    if (file) {
      file.addEventListener('change', () => {
        const selected = file.files && file.files[0];
        file.value = '';
        if (selected) openCropper(selected);
      });
    }

    const sync = root.querySelector('[data-notebook-autosync]');
    if (sync) {
      sync.checked = state.autoSync;
      sync.addEventListener('change', () => {
        saveAutoSync(sync.checked);
        if (state.autoSync) syncNow({ force: true });
      });
    }

    if (state.divider) {
      state.divider.addEventListener('pointerdown', startSplitDrag);
    }
  };

  const bindCropModal = (modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal || (event.target.closest && event.target.closest('[data-crop-cancel]'))) {
        closeCropper();
        return;
      }
      if (event.target.closest && event.target.closest('[data-crop-confirm]')) confirmCropper();
    });
    modal.addEventListener('pointerdown', (event) => {
      const box = event.target.closest && event.target.closest('[data-crop-box]');
      const handle = event.target.closest && event.target.closest('[data-crop-handle]');
      if (!box) return;
      event.preventDefault();
      const rect = box.getBoundingClientRect();
      state.cropDrag = {
        mode: handle ? 'resize' : 'move',
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };
      box.setPointerCapture(event.pointerId);
    });
    modal.addEventListener('pointermove', moveCropper);
    modal.addEventListener('pointerup', finishCropperDrag);
    modal.addEventListener('pointercancel', finishCropperDrag);
  };

  const setOpen = (open) => {
    const root = ensurePanel();
    root.classList.toggle('is-open', !!open);
    const aside = root.querySelector('.dpr-notebook-panel');
    if (aside) aside.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (state.toggle) {
      state.toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      state.toggle.title = open ? '拖动调整宽度，点击关闭笔记本' : '打开笔记本';
    }
    if (state.chatEntry) {
      state.chatEntry.classList.toggle('is-open', !!open);
    }
    document.body.classList.toggle('dpr-notebook-open', !!open);
    updateSplitState();
    if (open) {
      render();
      const input = root.querySelector('[data-notebook-input]');
      if (input) input.focus();
    } else {
      syncNow({ silent: true });
    }
  };

  const updateSplitState = () => {
    const chatOpen = document.body.classList.contains('dpr-chat-drawer-open');
    const notebookOpen = document.body.classList.contains('dpr-notebook-open');
    document.body.classList.toggle('dpr-chat-notebook-split', chatOpen && notebookOpen);
    if (!state.splitHeight) state.splitHeight = loadSplitHeight();
    if (state.splitHeight) state.splitHeight = applySplitLayoutVars(state.splitHeight);
  };

  const loadSplitHeight = () => {
    try {
      const raw = window.localStorage && window.localStorage.getItem('dpr_notebook_split_height_v1');
      const n = Number(raw);
      return Number.isFinite(n) && n > 120 ? n : Math.round(window.innerHeight * 0.48);
    } catch {
      return Math.round(window.innerHeight * 0.48);
    }
  };

  const saveSplitHeight = (value) => {
    state.splitHeight = applySplitLayoutVars(value);
    try {
      if (window.localStorage) window.localStorage.setItem('dpr_notebook_split_height_v1', String(state.splitHeight));
    } catch {
      // ignore
    }
  };

  const applySplitLayoutVars = (value) => {
    const fallback = Math.round(window.innerHeight * 0.48);
    const num = Number(value);
    const height = Math.max(160, Math.min(Number.isFinite(num) ? num : fallback, window.innerHeight - 180));
    const lowerHeight = Math.max(0, window.innerHeight - height - 24);
    document.documentElement.style.setProperty('--dpr-notebook-chat-height', `${height}px`);
    document.documentElement.style.setProperty('--dpr-chat-toggle-split-top', `${Math.round(8 + height / 2)}px`);
    document.documentElement.style.setProperty(
      '--dpr-notebook-toggle-split-top',
      `${Math.round(16 + height + lowerHeight / 2)}px`,
    );
    return height;
  };

  const startSplitDrag = (event) => {
    event.preventDefault();
    state.splitDrag = { startY: event.clientY, startHeight: state.splitHeight || loadSplitHeight() };
    document.body.classList.add('dpr-notebook-split-resizing');
    window.addEventListener('pointermove', moveSplitDrag, true);
    window.addEventListener('pointerup', stopSplitDrag, true);
  };

  const moveSplitDrag = (event) => {
    if (!state.splitDrag) return;
    saveSplitHeight(state.splitDrag.startHeight + event.clientY - state.splitDrag.startY);
  };

  const stopSplitDrag = () => {
    state.splitDrag = null;
    document.body.classList.remove('dpr-notebook-split-resizing');
    window.removeEventListener('pointermove', moveSplitDrag, true);
    window.removeEventListener('pointerup', stopSplitDrag, true);
  };

  const getNoteDragInsertBefore = (body, y, draggedCard) => {
    const cards = Array.from(body.querySelectorAll('.dpr-notebook-note[data-note-id]'))
      .filter((card) => card !== draggedCard);
    return cards.reduce((closest, card) => {
      const rect = card.getBoundingClientRect();
      const offset = y - rect.top - rect.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, card };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY, card: null }).card;
  };

  const persistNoteOrderFromDom = (body) => {
    const ids = Array.from(body.querySelectorAll('.dpr-notebook-note[data-note-id]'))
      .map((card) => card.dataset.noteId)
      .filter(Boolean);
    if (!ids.length) return;
    const record = getPaperRecord();
    const tombstones = record.notes.filter((note) => note.deleted);
    const active = sortNotes(record.notes).filter((note) => !note.deleted);
    const byId = new Map(active.map((note) => [note.id, note]));
    const ordered = ids.map((id) => byId.get(id)).filter(Boolean);
    active.forEach((note) => {
      if (!ids.includes(note.id)) ordered.push(note);
    });
    const now = nowIso();
    record.notes = ordered
      .map((note, order) => Object.assign({}, note, { order, updatedAt: now }))
      .concat(tombstones);
    record.dirty = true;
    record.updatedAt = now;
    setPaperRecord(state.paperId, record);
    render();
    scheduleSync();
  };

  const startNoteDrag = (event, handle) => {
    if (event.button !== 0 || state.activeTab !== 'notes') return;
    const card = handle && handle.closest ? handle.closest('.dpr-notebook-note[data-note-id]') : null;
    const body = card && card.parentElement;
    if (!card || !body) return;
    event.preventDefault();
    state.noteDrag = {
      pointerId: event.pointerId,
      startY: event.clientY,
      card,
      body,
      dragging: false,
    };
    window.addEventListener('pointermove', moveNoteDrag, true);
    window.addEventListener('pointerup', stopNoteDrag, true);
    window.addEventListener('pointercancel', stopNoteDrag, true);
  };

  const moveNoteDrag = (event) => {
    const drag = state.noteDrag;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const deltaY = event.clientY - drag.startY;
    if (!drag.dragging && Math.abs(deltaY) < 4) return;
    event.preventDefault();
    if (!drag.dragging) {
      drag.dragging = true;
      drag.card.classList.add('is-dragging');
      drag.body.classList.add('is-note-dragging');
      document.body.classList.add('dpr-notebook-note-reordering');
    }
    const before = getNoteDragInsertBefore(drag.body, event.clientY, drag.card);
    if (before) {
      drag.body.insertBefore(drag.card, before);
    } else {
      drag.body.appendChild(drag.card);
    }
  };

  const stopNoteDrag = (event) => {
    const drag = state.noteDrag;
    if (!drag || drag.pointerId !== event.pointerId) return;
    if (drag.dragging) {
      event.preventDefault();
      persistNoteOrderFromDom(drag.body);
    }
    drag.card.classList.remove('is-dragging');
    drag.body.classList.remove('is-note-dragging');
    document.body.classList.remove('dpr-notebook-note-reordering');
    state.noteDrag = null;
    window.removeEventListener('pointermove', moveNoteDrag, true);
    window.removeEventListener('pointerup', stopNoteDrag, true);
    window.removeEventListener('pointercancel', stopNoteDrag, true);
  };

  const render = () => {
    const root = ensurePanel();
    removeChatEntry();
    updateSplitState();
    const sync = root.querySelector('[data-notebook-autosync]');
    if (sync) sync.checked = state.autoSync;
    root.querySelectorAll('[data-notebook-tab]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.notebookTab === state.activeTab);
    });
    const composer = root.querySelector('[data-notebook-composer]');
    if (composer) composer.hidden = state.activeTab !== 'notes';
    renderBody();
    renderPending();
  };

  const renderBody = () => {
    const body = state.panel && state.panel.querySelector('[data-notebook-body]');
    if (!body) return;
    body.innerHTML = '';
    if (state.activeTab === 'highlights') {
      renderHighlightsTab(body);
      return;
    }
    const record = getPaperRecord();
    const notes = sortNotes(record.notes).filter((note) => !note.deleted);
    if (!notes.length) {
      const empty = document.createElement('div');
      empty.className = 'dpr-notebook-empty';
      empty.textContent = '还没有笔记。引用原文或直接输入，按 Enter 保存。';
      body.appendChild(empty);
      return;
    }
    notes.forEach((note) => body.appendChild(renderNoteCard(note)));
  };

  const renderHighlightsTab = (body) => {
    const api = window.DPRPaperHighlights;
    const record = api && typeof api.getRecord === 'function' ? api.getRecord(state.paperId) : null;
    const items = record && Array.isArray(record.items) ? record.items : [];
    if (!items.length) {
      const empty = document.createElement('div');
      empty.className = 'dpr-notebook-empty';
      empty.textContent = '当前论文还没有高亮内容。';
      body.appendChild(empty);
      return;
    }
    const title = document.createElement('div');
    title.className = 'dpr-notebook-section-title';
    title.textContent = `全部高亮 · ${items.length}`;
    body.appendChild(title);
    items.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'dpr-notebook-highlight-item';
      btn.style.setProperty('--dpr-highlight-color', item.color || '#fff2a8');
      btn.title = '点击跳转到高亮位置';
      btn.textContent = item.text || `高亮 ${index + 1}`;
      btn.addEventListener('click', () => jumpToQuote({
        source: 'paper',
        paperId: state.paperId,
        text: item.text,
        start: item.start,
        end: item.end,
        highlightId: item.id,
      }));
      body.appendChild(btn);
    });
  };

  const renderNoteCard = (note) => {
    const card = document.createElement('article');
    card.className = 'dpr-notebook-note';
    card.dataset.noteId = note.id;

    const actions = document.createElement('div');
    actions.className = 'dpr-notebook-note-actions';
    actions.innerHTML = `
      <button type="button" class="dpr-notebook-note-drag" data-note-drag-handle aria-label="拖动排序" title="按住拖动排序">拖动</button>
      <button type="button" data-note-action="edit">编辑</button>
      <button type="button" data-note-action="delete">删除</button>
    `;
    card.appendChild(actions);

    if (note.quotes.length) {
      const quotes = document.createElement('div');
      quotes.className = 'dpr-notebook-note-quotes';
      note.quotes.forEach((quote, quoteIndex) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'dpr-notebook-quote-chip';
        btn.dataset.notebookQuoteIndex = String(quoteIndex);
        btn._quote = quote;
        btn.textContent = `引用：${previewText(quote.text, 120)}`;
        quotes.appendChild(btn);
      });
      card.appendChild(quotes);
    }

    const text = document.createElement('div');
    text.className = 'dpr-notebook-note-text';
    text.textContent = note.text || '（无文字）';
    card.appendChild(text);

    if (note.images.length) {
      const images = document.createElement('div');
      images.className = 'dpr-notebook-note-images';
      note.images.forEach((image) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.name || '笔记图片';
        images.appendChild(img);
      });
      card.appendChild(images);
    }

    return card;
  };

  const renderPending = () => {
    const wrap = state.panel && state.panel.querySelector('[data-notebook-pending]');
    if (!wrap) return;
    wrap.innerHTML = '';
    if (!state.pendingQuotes.length && !state.pendingImages.length) {
      wrap.hidden = true;
      return;
    }
    wrap.hidden = false;
    state.pendingQuotes.forEach((quote, index) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'dpr-notebook-quote-chip';
      chip.dataset.notebookQuoteIndex = String(index);
      chip._quote = quote;
      chip.textContent = `引用：${previewText(quote.text, 120)}`;
      wrap.appendChild(chip);
    });
    state.pendingImages.forEach((image) => {
      const item = document.createElement('span');
      item.className = 'dpr-notebook-image-chip';
      item.innerHTML = `<img alt="待保存图片"><button type="button" aria-label="移除图片">&times;</button>`;
      item.querySelector('img').src = image.src;
      item.querySelector('button').addEventListener('click', () => {
        state.pendingImages = state.pendingImages.filter((old) => old.id !== image.id);
        renderPending();
      });
      wrap.appendChild(item);
    });
  };

  const saveComposerNote = () => {
    const input = state.panel && state.panel.querySelector('[data-notebook-input]');
    const text = input ? input.value.trim() : '';
    if (!text && !state.pendingQuotes.length && !state.pendingImages.length) return;
    const record = getPaperRecord();
    const now = nowIso();
    record.notes.push({
      id: `note-${safeId()}`,
      text,
      quotes: state.pendingQuotes.map((quote) => Object.assign({}, quote)),
      images: state.pendingImages.map((image) => Object.assign({}, image)),
      order: record.notes.length,
      createdAt: now,
      updatedAt: now,
      deleted: false,
    });
    record.dirty = true;
    record.updatedAt = now;
    setPaperRecord(state.paperId, record);
    state.pendingQuotes = [];
    state.pendingImages = [];
    if (input) input.value = '';
    render();
    scheduleSync();
  };

  const handleNoteAction = (actionBtn) => {
    const card = actionBtn.closest('[data-note-id]');
    const noteId = card && card.dataset.noteId;
    if (!noteId) return;
    const action = actionBtn.dataset.noteAction;
    const record = getPaperRecord();
    const tombstones = record.notes.filter((note) => note.deleted);
    let notes = sortNotes(record.notes).filter((note) => !note.deleted);
    const index = notes.findIndex((note) => note.id === noteId);
    if (index < 0) return;
    const now = nowIso();
    let deletedNote = null;

    if (action === 'delete') {
      if (!window.confirm('删除这条笔记吗？')) return;
      deletedNote = Object.assign({}, notes[index], { deleted: true, updatedAt: now });
      notes.splice(index, 1);
    } else if (action === 'edit') {
      openEditNote(card, notes[index]);
      return;
    } else if (action === 'save-edit') {
      const textarea = card.querySelector('[data-note-edit-text]');
      notes[index].text = textarea ? textarea.value : notes[index].text;
      notes[index].updatedAt = now;
    } else if (action === 'cancel-edit') {
      render();
      return;
    }

    record.notes = notes
      .map((note, order) => Object.assign({}, note, {
        order,
        updatedAt: note.updatedAt,
      }))
      .concat(tombstones, deletedNote ? [deletedNote] : []);
    record.dirty = true;
    record.updatedAt = now;
    setPaperRecord(state.paperId, record);
    render();
    scheduleSync();
  };

  const openEditNote = (card, note) => {
    const text = card.querySelector('.dpr-notebook-note-text');
    if (!text) return;
    text.innerHTML = '';
    const textarea = document.createElement('textarea');
    textarea.dataset.noteEditText = '1';
    textarea.value = note.text || '';
    text.appendChild(textarea);
    const actions = card.querySelector('.dpr-notebook-note-actions');
    if (actions) {
      actions.innerHTML = `
        <button type="button" data-note-action="save-edit">保存</button>
        <button type="button" data-note-action="cancel-edit">取消</button>
      `;
    }
    textarea.focus();
  };

  const openCropper = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const modal = ensureCropModal();
      const img = modal.querySelector('[data-crop-image]');
      img.onload = () => {
        modal.classList.add('is-open');
        window.setTimeout(() => resetCropBox(modal), 30);
      };
      img.src = String(reader.result || '');
      state.crop = { file, src: img.src };
    };
    reader.readAsDataURL(file);
  };

  const resetCropBox = (modal) => {
    const img = modal.querySelector('[data-crop-image]');
    const box = modal.querySelector('[data-crop-box]');
    if (!img || !box) return;
    const rect = img.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height) * 0.72;
    box.style.left = `${rect.left + (rect.width - size) / 2}px`;
    box.style.top = `${rect.top + (rect.height - size) / 2}px`;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  };

  const closeCropper = () => {
    if (state.cropModal) state.cropModal.classList.remove('is-open');
    state.crop = null;
    state.cropDrag = null;
  };

  const moveCropper = (event) => {
    if (!state.cropDrag || !state.cropModal) return;
    const box = state.cropModal.querySelector('[data-crop-box]');
    const img = state.cropModal.querySelector('[data-crop-image]');
    if (!box || !img) return;
    const imgRect = img.getBoundingClientRect();
    const dx = event.clientX - state.cropDrag.startX;
    const dy = event.clientY - state.cropDrag.startY;
    if (state.cropDrag.mode === 'resize') {
      const size = Math.max(42, Math.min(state.cropDrag.width + Math.max(dx, dy), imgRect.width, imgRect.height));
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.left = `${Math.min(state.cropDrag.left, imgRect.right - size)}px`;
      box.style.top = `${Math.min(state.cropDrag.top, imgRect.bottom - size)}px`;
    } else {
      const left = Math.max(imgRect.left, Math.min(state.cropDrag.left + dx, imgRect.right - state.cropDrag.width));
      const top = Math.max(imgRect.top, Math.min(state.cropDrag.top + dy, imgRect.bottom - state.cropDrag.height));
      box.style.left = `${left}px`;
      box.style.top = `${top}px`;
    }
  };

  const finishCropperDrag = (event) => {
    if (!state.cropDrag || !state.cropModal) return;
    const box = state.cropModal.querySelector('[data-crop-box]');
    try {
      if (box) box.releasePointerCapture(event.pointerId);
    } catch {
      // ignore
    }
    state.cropDrag = null;
  };

  const confirmCropper = () => {
    const modal = state.cropModal;
    const img = modal && modal.querySelector('[data-crop-image]');
    const box = modal && modal.querySelector('[data-crop-box]');
    if (!img || !box || !state.crop) return;
    const imgRect = img.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();
    const scaleX = img.naturalWidth / imgRect.width;
    const scaleY = img.naturalHeight / imgRect.height;
    const sx = Math.max(0, (boxRect.left - imgRect.left) * scaleX);
    const sy = Math.max(0, (boxRect.top - imgRect.top) * scaleY);
    const sw = Math.min(img.naturalWidth - sx, boxRect.width * scaleX);
    const sh = Math.min(img.naturalHeight - sy, boxRect.height * scaleY);
    const maxSize = 1280;
    const ratio = Math.min(1, maxSize / Math.max(sw, sh));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(sw * ratio));
    canvas.height = Math.max(1, Math.round(sh * ratio));
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    state.pendingImages.push({
      id: `img-${safeId()}`,
      src: canvas.toDataURL('image/jpeg', 0.88),
      name: state.crop.file ? state.crop.file.name : 'image.jpg',
      createdAt: nowIso(),
    });
    closeCropper();
    renderPending();
  };

  const quoteToNotebook = (text, options = {}) => {
    const quote = normalizeQuote(Object.assign({}, options, { text }));
    if (!quote) return false;
    ensurePanel();
    state.pendingQuotes.push(quote);
    setOpen(true);
    state.activeTab = 'notes';
    render();
    const input = state.panel && state.panel.querySelector('[data-notebook-input]');
    if (input) input.focus();
    return true;
  };

  const removeArtifacts = () => {
    document.querySelectorAll('#dpr-paper-notebook').forEach((el) => el.remove());
    document.querySelectorAll('.dpr-notebook-crop-modal').forEach((el) => el.remove());
    const entry = document.querySelector('#dpr-notebook-chat-entry');
    if (entry) entry.remove();
    document.body.classList.remove('dpr-notebook-open', 'dpr-chat-notebook-split');
    state.panel = null;
    state.toggle = null;
    state.cropModal = null;
    state.pendingQuotes = [];
    state.pendingImages = [];
  };

  const initForPage = (paperId) => {
    state.paperId = normalizePaperId(paperId);
    if (!state.paperId) return;
    state.autoSync = readAutoSync();
    removeArtifacts();
    ensurePanel();
    const savedDrawerWidth = loadNotebookDrawerWidth();
    if (savedDrawerWidth) applyNotebookDrawerWidth(savedDrawerWidth, { persist: false });
    removeChatEntry();
    render();
    loadRemoteAndMerge().then(() => {
      const record = getPaperRecord();
      if (record.dirty && state.autoSync) syncNow({ force: true });
    });
  };

  const initForRoute = (vm) => {
    const paperId = paperIdFromFile(vm && vm.route ? vm.route.file : '');
    if (!paperId) {
      syncNow({ silent: true });
      state.paperId = '';
      removeArtifacts();
      return;
    }
    initForPage(paperId);
  };

  const bindGlobalEvents = () => {
    if (window.__DPR_NOTEBOOK_BOUND__) return;
    window.__DPR_NOTEBOOK_BOUND__ = true;
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') syncNow({ silent: true });
    });
    window.addEventListener('pagehide', () => syncNow({ silent: true }));
    window.addEventListener('resize', () => updateSplitState());
    window.setInterval(() => {
      removeChatEntry();
      updateSplitState();
    }, 1200);
  };

  const registerDocsifyPlugin = () => {
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [].concat(window.$docsify.plugins || [], function (hook, vm) {
      hook.doneEach(function () {
        bindGlobalEvents();
        window.setTimeout(() => initForRoute(vm), 0);
      });
    });
  };

  registerDocsifyPlugin();

  return {
    initForPage,
    quoteToNotebook,
    syncNow,
    syncLayout: updateSplitState,
    getPaperRecord,
  };
})();
