var util = require("util");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  //_extend: // skipping
  debug: { enumerable: true, value: bind(util, util.debug) },
  deprecate: { enumerable: true, value: bind(util, util.deprecate) },
  error: { enumerable: true, value: bind(util, util.error) },
  exec: { enumerable: true, value: bind(util, util.exec) },
  format: { enumerable: true, value: bind(util, util.format) },
  inherits: { enumerable: true, value: bind(util, util.inherits) },
  inspect: { enumerable: true, value: bind(util, util.inspect) },
  isArray: { enumerable: true, value: bind(util, util.isArray) },
  isDate: { enumerable: true, value: bind(util, util.isDate) },
  isError: { enumerable: true, value: bind(util, util.isError) },
  isRegExp: { enumerable: true, value: bind(util, util.isRegExp) },
  log: { enumerable: true, value: bind(util, util.log) },
  p: { enumerable: true, value: bind(util, util.p) },
  print: { enumerable: true, value: bind(util, util.print) },
  pump: { enumerable: true, value: promisify(util, util.pump, 2) },
  puts: { enumerable: true, value: bind(util, util.puts) },
});