var child_process = require("child_process");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  //_forkChild: // skipping
  exec: { enumerable: true, value: promisify.returnsObject(child_process, child_process.exec, 1, ["stdout","stderr"]) },
  execFile: { enumerable: true, value: promisify.returnsObject(child_process, child_process.execFile, 1, ["stdout","stderr"]) },
  fork: { enumerable: true, value: bind(child_process, child_process.fork) },
  spawn: { enumerable: true, value: bind(child_process, child_process.spawn) },
});