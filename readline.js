var readline = require("readline");
var promisify = require("./_promisify.js");
Object.defineProperties(module.exports, {
  Interface: { enumerable: true, value: readline.Interface },
  clearLine: { enumerable: true, value: readline.clearLine.bind(readline) },
  clearScreenDown: { enumerable: true, value: readline.clearScreenDown.bind(readline) },
  createInterface: { enumerable: true, value: readline.createInterface.bind(readline) },
  cursorTo: { enumerable: true, value: readline.cursorTo.bind(readline) },
  emitKeypressEvents: { enumerable: true, value: readline.emitKeypressEvents.bind(readline) },
  moveCursor: { enumerable: true, value: readline.moveCursor.bind(readline) },
});