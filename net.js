var net = require("net");
var promisify = require("./_promisify.js");
Object.defineProperties(module.exports, {
  Server: { enumerable: true, value: net.Server },
  Socket: { enumerable: true, value: net.Socket },
  Stream: { enumerable: true, value: net.Stream },
  //_createServerHandle: // skipping
  //_normalizeConnectArgs: // skipping
  //_setSimultaneousAccepts: // skipping
  connect: { enumerable: true, value: net.connect.bind(net) },
  createConnection: { enumerable: true, value: net.createConnection.bind(net) },
  createServer: { enumerable: true, value: net.createServer.bind(net) },
  isIP: { enumerable: true, value: net.isIP.bind(net) },
  isIPv4: { enumerable: true, value: net.isIPv4.bind(net) },
  isIPv6: { enumerable: true, value: net.isIPv6.bind(net) },
});