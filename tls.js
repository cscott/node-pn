var tls = require("tls");
var promisify = require("./_promisify.js");
Object.defineProperties(module.exports, {
  CLIENT_RENEG_LIMIT: { enumerable: true, value: tls.CLIENT_RENEG_LIMIT },
  CLIENT_RENEG_WINDOW: { enumerable: true, value: tls.CLIENT_RENEG_WINDOW },
  SLAB_BUFFER_SIZE: { enumerable: true, value: tls.SLAB_BUFFER_SIZE },
  Server: { enumerable: true, value: tls.Server },
  checkServerIdentity: { enumerable: true, value: tls.checkServerIdentity.bind(tls) },
  connect: { enumerable: true, value: promisify.returnsObject(tls, tls.connect, 1) },
  createSecurePair: { enumerable: true, value: tls.createSecurePair.bind(tls) },
  createServer: { enumerable: true, value: promisify.returnsObject(tls, tls.createServer, 1) },
  getCiphers: { enumerable: true, value: tls.getCiphers.bind(tls) },
});