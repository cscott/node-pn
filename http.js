var http = require("http");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  Agent: { enumerable: true, value: http.Agent },
  Client: { enumerable: true, value: http.Client },
  ClientRequest: { enumerable: true, value: http.ClientRequest },
  IncomingMessage: { enumerable: true, value: http.IncomingMessage },
  OutgoingMessage: { enumerable: true, value: http.OutgoingMessage },
  STATUS_CODES: { enumerable: true, value: http.STATUS_CODES },
  Server: { enumerable: true, value: http.Server },
  ServerResponse: { enumerable: true, value: http.ServerResponse },
  //_connectionListener: // skipping
  createClient: { enumerable: true, value: bind(http, http.createClient) },
  createServer: { enumerable: true, value: bind(http, http.createServer) },
  get: { enumerable: true, value: promisify.returnsObject(http, http.get, 1) },
  globalAgent: { enumerable: true, get: function() { return http.globalAgent; }, set: function(v) { http.globalAgent = v; } },
  parsers: { enumerable: true, get: function() { return http.parsers; }, set: function(v) { http.parsers = v; } },
  request: { enumerable: true, value: promisify.returnsObject(http, http.request, 1) },
});