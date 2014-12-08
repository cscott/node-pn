var readline = require("readline");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  Interface: { enumerable: true, value: readline.Interface },
  clearLine: { enumerable: true, value: bind(readline, readline.clearLine) },
  clearScreenDown: { enumerable: true, value: bind(readline, readline.clearScreenDown) },
  createInterface: { enumerable: true, value: bind(readline, readline.createInterface) },
  cursorTo: { enumerable: true, value: bind(readline, readline.cursorTo) },
  emitKeypressEvents: { enumerable: true, value: bind(readline, readline.emitKeypressEvents) },
  moveCursor: { enumerable: true, value: bind(readline, readline.moveCursor) },
});