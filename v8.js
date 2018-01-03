var v8 = {};
try { v8 = require("v8"); } catch (e) { }
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  getHeapSpaceStatistics: { enumerable: true, value: bind(v8, v8.getHeapSpaceStatistics) },
  getHeapStatistics: { enumerable: true, value: bind(v8, v8.getHeapStatistics) },
  setFlagsFromString: { enumerable: true, value: bind(v8, v8.setFlagsFromString) },
});