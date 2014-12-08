var promisify = require("./_promisify.js");
Object.defineProperties(module.exports, {
  EventEmitter: { enumerable: true, value: process.EventEmitter },
  //_currentTickHandler: // skipping
  //_debugEnd: // skipping
  //_debugPause: // skipping
  //_debugProcess: // skipping
  //_events: // skipping
  //_exiting: // skipping
  //_fatalException: // skipping
  //_getActiveHandles: // skipping
  //_getActiveRequests: // skipping
  //_kill: // skipping
  //_maxListeners: // skipping
  //_needImmediateCallback: // skipping
  //_needTickCallback: // skipping
  //_nextDomainTick: // skipping
  //_tickCallback: // skipping
  //_tickDomainCallback: // skipping
  //_tickFromSpinner: // skipping
  //_tickInfoBox: // skipping
  //_usingDomains: // skipping
  abort: { enumerable: true, value: process.abort.bind(process) },
  addListener: { enumerable: true, value: process.addListener.bind(process) },
  arch: { enumerable: true, get: function() { return process.arch; }, set: function(v) { process.arch = v; } },
  argv: { enumerable: true, get: function() { return process.argv; }, set: function(v) { process.argv = v; } },
  assert: { enumerable: true, value: process.assert.bind(process) },
  binding: { enumerable: true, value: process.binding.bind(process) },
  chdir: { enumerable: true, value: process.chdir.bind(process) },
  config: { enumerable: true, get: function() { return process.config; }, set: function(v) { process.config = v; } },
  cwd: { enumerable: true, value: process.cwd.bind(process) },
  debugPort: { enumerable: true, get: function() { return process.debugPort; }, set: function(v) { process.debugPort = v; } },
  dlopen: { enumerable: true, value: process.dlopen.bind(process) },
  domain: { enumerable: true, get: function() { return process.domain; }, set: function(v) { process.domain = v; } },
  env: { enumerable: true, get: function() { return process.env; }, set: function(v) { process.env = v; } },
  execArgv: { enumerable: true, get: function() { return process.execArgv; }, set: function(v) { process.execArgv = v; } },
  execPath: { enumerable: true, get: function() { return process.execPath; }, set: function(v) { process.execPath = v; } },
  exit: { enumerable: true, value: process.exit.bind(process) },
  features: { enumerable: true, get: function() { return process.features; }, set: function(v) { process.features = v; } },
  getgid: { enumerable: true, value: process.getgid.bind(process) },
  getgroups: { enumerable: true, value: process.getgroups.bind(process) },
  getuid: { enumerable: true, value: process.getuid.bind(process) },
  hrtime: { enumerable: true, value: process.hrtime.bind(process) },
  initgroups: { enumerable: true, value: process.initgroups.bind(process) },
  kill: { enumerable: true, value: process.kill.bind(process) },
  mainModule: { enumerable: true, get: function() { return process.mainModule; }, set: function(v) { process.mainModule = v; } },
  maxTickDepth: { enumerable: true, get: function() { return process.maxTickDepth; }, set: function(v) { process.maxTickDepth = v; } },
  memoryUsage: { enumerable: true, value: process.memoryUsage.bind(process) },
  moduleLoadList: { enumerable: true, get: function() { return process.moduleLoadList; }, set: function(v) { process.moduleLoadList = v; } },
  nextTick: { enumerable: true, value: promisify(process, process.nextTick, 0) },
  on: { enumerable: true, value: process.on.bind(process) },
  openStdin: { enumerable: true, value: process.openStdin.bind(process) },
  pid: { enumerable: true, get: function() { return process.pid; }, set: function(v) { process.pid = v; } },
  platform: { enumerable: true, get: function() { return process.platform; }, set: function(v) { process.platform = v; } },
  reallyExit: { enumerable: true, value: process.reallyExit.bind(process) },
  removeListener: { enumerable: true, value: process.removeListener.bind(process) },
  setgid: { enumerable: true, value: process.setgid.bind(process) },
  setgroups: { enumerable: true, value: process.setgroups.bind(process) },
  setuid: { enumerable: true, value: process.setuid.bind(process) },
  stderr: { enumerable: true, get: function() { return process.stderr; }, set: function(v) { process.stderr = v; } },
  stdin: { enumerable: true, get: function() { return process.stdin; }, set: function(v) { process.stdin = v; } },
  stdout: { enumerable: true, get: function() { return process.stdout; }, set: function(v) { process.stdout = v; } },
  title: { enumerable: true, get: function() { return process.title; }, set: function(v) { process.title = v; } },
  umask: { enumerable: true, value: process.umask.bind(process) },
  uptime: { enumerable: true, value: process.uptime.bind(process) },
  version: { enumerable: true, get: function() { return process.version; }, set: function(v) { process.version = v; } },
  versions: { enumerable: true, get: function() { return process.versions; }, set: function(v) { process.versions = v; } },
});