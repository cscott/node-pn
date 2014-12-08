// if running on older node, ensure that es6-shim is loaded first
if (/^v0.10/.test(process.version)) { require('es6-shim'); }
var assert= require('../assert');
var fs = require('../fs');
var path = require('../path');

var TESTFILE = '/tmp/hello';

describe('fs module', function() {
    it('write/read/unlink', function() {
        return fs.exists(TESTFILE).then(function(exists) {
            assert.equal(!!exists, false,
                         "Pre-existing file "+TESTFILE+"; aborting test.");
        }).then(function() {
            return fs.writeFile(TESTFILE, 'hello', 'utf-8');
        }).then(function() {
            return fs.exists(TESTFILE);
        }).then(function(exists) {
            assert.equal(!!exists, true);
            return fs.readFile(TESTFILE, 'utf-8');
        }).then(function(contents) {
            assert.equal(contents, 'hello');
            return fs.unlink(TESTFILE);
        }).then(function() {
            return fs.exists(TESTFILE);
        }).then(function(exists) {
            assert.equal(!!exists, false);
        });
    });
});
