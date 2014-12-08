var dgram = require("dgram");
var promisify = require("./_promisify.js");
Object.defineProperties(module.exports, {
  Socket: { enumerable: true, value: dgram.Socket },
  //_createSocketHandle: // skipping
  createSocket: { enumerable: true, value: dgram.createSocket.bind(dgram) },
});