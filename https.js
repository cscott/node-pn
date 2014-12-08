var https = require("https");
var promisify = require("./_promisify.js");
Object.defineProperties(module.exports, {
  Agent: { enumerable: true, value: https.Agent },
  Server: { enumerable: true, value: https.Server },
  createServer: { enumerable: true, value: https.createServer.bind(https) },
  get: { enumerable: true, value: promisify.returnsObject(https, https.get, 1) },
  globalAgent: { enumerable: true, get: function() { return https.globalAgent; }, set: function(v) { https.globalAgent = v; } },
  request: { enumerable: true, value: promisify.returnsObject(https, https.request, 1) },
});