var child_process = require("child_process");
var promisify = require("./_promisify.js");
Object.defineProperties(module.exports, {
  //_forkChild: // skipping
  exec: { enumerable: true, value: promisify.returnsObject(child_process, child_process.exec, 1, ["stdout","stderr"]) },
  execFile: { enumerable: true, value: promisify.returnsObject(child_process, child_process.execFile, 1, ["stdout","stderr"]) },
  fork: { enumerable: true, value: child_process.fork.bind(child_process) },
  spawn: { enumerable: true, value: child_process.spawn.bind(child_process) },
});