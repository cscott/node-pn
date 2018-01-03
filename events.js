var events = require("events");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  EventEmitter: { enumerable: true, value: events.EventEmitter },
  defaultMaxListeners: { enumerable: true, get: function() { return events.defaultMaxListeners; }, set: function(v) { events.defaultMaxListeners = v; } },
  init: { enumerable: true, value: bind(events, events.init) },
  listenerCount: { enumerable: true, value: bind(events, events.listenerCount) },
  usingDomains: { enumerable: true, get: function() { return events.usingDomains; }, set: function(v) { events.usingDomains = v; } },
});