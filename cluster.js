var cluster = require("cluster");
var promisify = require("./_promisify.js");
Object.defineProperties(module.exports, {
  Worker: { enumerable: true, value: cluster.Worker },
  //_events: // skipping
  //_getServer: // skipping
  //_maxListeners: // skipping
  //_setupWorker: // skipping
  disconnect: { enumerable: true, value: promisify(cluster, cluster.disconnect, 0) },
  domain: { enumerable: true, get: function() { return cluster.domain; }, set: function(v) { cluster.domain = v; } },
  fork: { enumerable: true, value: cluster.fork.bind(cluster) },
  isMaster: { enumerable: true, get: function() { return cluster.isMaster; }, set: function(v) { cluster.isMaster = v; } },
  isWorker: { enumerable: true, get: function() { return cluster.isWorker; }, set: function(v) { cluster.isWorker = v; } },
  settings: { enumerable: true, get: function() { return cluster.settings; }, set: function(v) { cluster.settings = v; } },
  setupMaster: { enumerable: true, value: cluster.setupMaster.bind(cluster) },
  worker: { enumerable: true, get: function() { return cluster.worker; }, set: function(v) { cluster.worker = v; } },
  workers: { enumerable: true, get: function() { return cluster.workers; }, set: function(v) { cluster.workers = v; } },
});