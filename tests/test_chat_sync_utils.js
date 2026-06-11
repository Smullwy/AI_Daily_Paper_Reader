const assert = require('node:assert/strict');
const { webcrypto } = require('node:crypto');

global.atob = (value) => Buffer.from(String(value), 'base64').toString('binary');
global.btoa = (value) => Buffer.from(String(value), 'binary').toString('base64');
global.window = {
  crypto: webcrypto,
};

const utils = require('../app/chat-sync-utils.js');

async function run() {
  assert.equal(
    utils.deriveChatDbPath('docs/reader-db/state.enc.json'),
    'docs/reader-db/chats.enc.json',
  );
  assert.equal(
    utils.deriveChatDbPath('/private/reader/state.enc.json'),
    'private/reader/chats.enc.json',
  );

  const db = utils.setChatMessages(
    utils.emptyChatDatabase(),
    '#/202606/08/paper.md',
    [
      { role: 'user', time: '10:00', content: '问题' },
      { role: 'assistant', time: '10:01', content: '回答', model: 'gpt-test' },
      { role: 'thinking', content: 'hidden' },
      { role: 'unknown', content: 'ignored' },
    ],
    '2026-06-08T00:00:00.000Z',
  );
  const messages = utils.getChatMessages(db, '202606/08/paper');
  assert.equal(messages.length, 3);
  assert.equal(messages[1].role, 'ai');
  assert.equal(messages[1].model, 'gpt-test');

  const key = Buffer.alloc(32, 3).toString('base64');
  const encrypted = await utils.encryptChatDatabase(db, key, 'docs/reader-db/chats.enc.json');
  assert.equal(encrypted.kind, 'dpr-chat-database');
  assert.ok(encrypted.ciphertext);
  const decrypted = await utils.decryptChatDatabase(encrypted, key);
  assert.deepEqual(
    utils.getChatMessages(decrypted, '202606/08/paper').map((item) => item.role),
    ['user', 'ai', 'thinking'],
  );
  await assert.rejects(
    () => utils.decryptChatDatabase(encrypted, Buffer.alloc(32, 4).toString('base64')),
    /decrypt|operation|data/i,
  );

  console.log('chat sync utils tests passed');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
