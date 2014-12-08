var domain = require("domain");
var promisify = require("./_promisify.js");
Object.defineProperties(module.exports, {
  Domain: { enumerable: true, value: domain.Domain },
  //_stack: // skipping
  active: { enumerable: true, get: function() { return domain.active; }, set: function(v) { domain.active = v; } },
  create: { enumerable: true, value: domain.create.bind(domain) },
  createDomain: { enumerable: true, value: domain.createDomain.bind(domain) },
});