(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.DPRChatSyncUtils = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const SCHEMA_VERSION = 1;
  const DEFAULT_READER_DB_PATH = 'docs/reader-db/state.enc.json';
  const DEFAULT_CHAT_DB_FILENAME = 'chats.enc.json';

  const normalizeText = (value) => String(value || '').trim();

  const normalizeRepoPath = (value) =>
    normalizeText(value).replace(/^\/+/, '').replace(/\/{2,}/g, '/');

  const deriveChatDbPath = (readerDbPath) => {
    const clean = normalizeRepoPath(readerDbPath || DEFAULT_READER_DB_PATH);
    const parts = clean.split('/').filter(Boolean);
    if (parts.length <= 1) return `docs/reader-db/${DEFAULT_CHAT_DB_FILENAME}`;
    parts.pop();
    const dir = parts.join('/') || 'docs/reader-db';
    return `${dir}/${DEFAULT_CHAT_DB_FILENAME}`;
  };

  const normalizePaperId = (paperId) =>
    normalizeText(paperId).replace(/^#\//, '').replace(/\.md$/i, '').replace(/\/$/, '');

  const normalizeQuoteBlocks = (quotes) =>
    (Array.isArray(quotes) ? quotes : [])
      .map((quote) => {
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
      })
      .filter(Boolean);

  const normalizeChatMessage = (message) => {
    const source = message && typeof message === 'object' ? message : {};
    const rawRole = normalizeText(source.role).toLowerCase();
    const role = rawRole === 'assistant' ? 'ai' : rawRole;
    if (!['user', 'ai', 'thinking'].includes(role)) return null;
    const content = String(source.content || '');
    if (!content && role !== 'thinking') return null;
    const out = {
      role,
      content,
    };
    const time = normalizeText(source.time);
    const model = normalizeText(source.model);
    const quotes = normalizeQuoteBlocks(source.quotes || source.quoteBlocks);
    if (time) out.time = time;
    if (model && role === 'ai') out.model = model;
    if (role === 'user' && quotes.length) out.quotes = quotes;
    return out;
  };

  const normalizeChatMessages = (messages) =>
    (Array.isArray(messages) ? messages : [])
      .map(normalizeChatMessage)
      .filter(Boolean);

  const emptyChatDatabase = () => ({
    schemaVersion: SCHEMA_VERSION,
    updatedAt: new Date().toISOString(),
    chats: {},
  });

  const normalizeChatDatabase = (database) => {
    const source = database && typeof database === 'object' ? database : {};
    const out = emptyChatDatabase();
    const updatedAt = normalizeText(source.updatedAt);
    if (updatedAt) out.updatedAt = updatedAt;
    const chats = source.chats && typeof source.chats === 'object' ? source.chats : {};
    Object.keys(chats).forEach((paperId) => {
      const cleanPaperId = normalizePaperId(paperId);
      if (!cleanPaperId) return;
      const rawRecord = chats[paperId];
      const record = rawRecord && typeof rawRecord === 'object' ? rawRecord : {};
      const messages = normalizeChatMessages(record.messages || rawRecord);
      if (!messages.length) return;
      out.chats[cleanPaperId] = {
        paperId: cleanPaperId,
        messages,
        updatedAt: normalizeText(record.updatedAt) || out.updatedAt,
        syncedAt: normalizeText(record.syncedAt),
      };
    });
    return out;
  };

  const getChatMessages = (database, paperId) => {
    const db = normalizeChatDatabase(database);
    const record = db.chats[normalizePaperId(paperId)];
    return record && Array.isArray(record.messages) ? record.messages.slice() : [];
  };

  const setChatMessages = (database, paperId, messages, nowIso) => {
    const cleanPaperId = normalizePaperId(paperId);
    if (!cleanPaperId) throw new Error('Missing paperId for chat sync.');
    const normalizedMessages = normalizeChatMessages(messages);
    if (!normalizedMessages.length) {
      throw new Error('Cannot sync an empty chat history.');
    }
    const db = normalizeChatDatabase(database);
    const now = normalizeText(nowIso) || new Date().toISOString();
    db.updatedAt = now;
    db.chats[cleanPaperId] = {
      paperId: cleanPaperId,
      messages: normalizedMessages,
      updatedAt: now,
      syncedAt: now,
    };
    return db;
  };

  const bytesToBase64 = (bytes) => {
    const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
    let binary = '';
    for (let i = 0; i < view.length; i += 1) {
      binary += String.fromCharCode(view[i]);
    }
    return btoa(binary);
  };

  const base64ToBytes = (raw) => {
    const binary = atob(String(raw || '').replace(/\s+/g, ''));
    const out = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      out[i] = binary.charCodeAt(i);
    }
    return out;
  };

  const getCrypto = () => {
    const cryptoObj =
      (typeof window !== 'undefined' && (window.crypto || window.msCrypto)) ||
      (typeof globalThis !== 'undefined' && globalThis.crypto) ||
      null;
    if (!cryptoObj || !cryptoObj.subtle) {
      throw new Error('Web Crypto AES-GCM is not available.');
    }
    return cryptoObj;
  };

  const importAesKey = async (keyB64, usages) =>
    getCrypto().subtle.importKey('raw', base64ToBytes(keyB64), { name: 'AES-GCM' }, false, usages);

  const encryptChatDatabase = async (database, keyB64, path) => {
    const cryptoObj = getCrypto();
    const db = normalizeChatDatabase(database);
    const iv = cryptoObj.getRandomValues(new Uint8Array(12));
    const key = await importAesKey(keyB64, ['encrypt']);
    const encoded = new TextEncoder().encode(JSON.stringify(db));
    const cipherBuf = await cryptoObj.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoded);
    return {
      version: 1,
      kind: 'dpr-chat-database',
      algorithm: 'AES-GCM',
      path: normalizeRepoPath(path || deriveChatDbPath()),
      updatedAt: db.updatedAt,
      iv: bytesToBase64(iv),
      ciphertext: bytesToBase64(new Uint8Array(cipherBuf)),
    };
  };

  const decryptChatDatabase = async (encryptedPayload, keyB64) => {
    const payload = encryptedPayload && typeof encryptedPayload === 'object' ? encryptedPayload : {};
    if (!payload.iv || !payload.ciphertext) {
      throw new Error('Chat database payload is not a valid encrypted JSON object.');
    }
    const key = await importAesKey(keyB64, ['decrypt']);
    const plainBuf = await getCrypto().subtle.decrypt(
      { name: 'AES-GCM', iv: base64ToBytes(payload.iv) },
      key,
      base64ToBytes(payload.ciphertext),
    );
    const text = new TextDecoder().decode(plainBuf);
    return normalizeChatDatabase(JSON.parse(text));
  };

  return {
    SCHEMA_VERSION,
    DEFAULT_READER_DB_PATH,
    DEFAULT_CHAT_DB_FILENAME,
    normalizeRepoPath,
    deriveChatDbPath,
    normalizePaperId,
    normalizeChatMessage,
    normalizeChatMessages,
    emptyChatDatabase,
    normalizeChatDatabase,
    getChatMessages,
    setChatMessages,
    encryptChatDatabase,
    decryptChatDatabase,
  };
});
