var util = require("util");
var promisify = require("./_promisify.js");
Object.defineProperties(module.exports, {
  //_extend: // skipping
  debug: { enumerable: true, value: util.debug.bind(util) },
  deprecate: { enumerable: true, value: util.deprecate.bind(util) },
  error: { enumerable: true, value: util.error.bind(util) },
  exec: { enumerable: true, value: util.exec.bind(util) },
  format: { enumerable: true, value: util.format.bind(util) },
  inherits: { enumerable: true, value: util.inherits.bind(util) },
  inspect: { enumerable: true, value: util.inspect.bind(util) },
  isArray: { enumerable: true, value: util.isArray.bind(util) },
  isDate: { enumerable: true, value: util.isDate.bind(util) },
  isError: { enumerable: true, value: util.isError.bind(util) },
  isRegExp: { enumerable: true, value: util.isRegExp.bind(util) },
  log: { enumerable: true, value: util.log.bind(util) },
  p: { enumerable: true, value: util.p.bind(util) },
  print: { enumerable: true, value: util.print.bind(util) },
  pump: { enumerable: true, value: promisify(util, util.pump, 2) },
  puts: { enumerable: true, value: util.puts.bind(util) },
});