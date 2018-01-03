// freeze Array#slice, just in case of funny business later.
var _slice = Array.prototype.slice;
var getPromise = require('./_promise.js');

var util_promisify_custom = null;
try {
    util_promisify_custom = require('util').promisify.custom;
} catch (e) { /* ignore, pre-8.0.0 */ }

// deferred gets its own scope to prevent inadvertent capture in the closure
var deferred = function(options) {
    var Promise = getPromise();
    var resolve, reject, p = new Promise(function(_resolve, _reject) {
        resolve = _resolve; reject = _reject;
    });
    var pattern = (options && options.pattern);
    var noError = (options && options.noError);
    var cb = pattern ? function(err) {
        if (err && !noError) { return reject(err); }
        var result = {}, i, offset = noError ? 0 : 1;
        for (i = 0; i < pattern.length; i++) {
            result[pattern[i]] = arguments[i+offset];
        }
        resolve(result);
    } : noError ? resolve : function(err, val) {
        if (err) { reject(err); } else { resolve(val); }
    };
    return { promise: p, callback: cb };
};
var promisify = module.exports = function(context, func, mandatoryArgs, options) {
    // node 8.0.0 allows custom 'promisified' functions
    if (util_promisify_custom && func &&
        typeof(func[util_promisify_custom]) === 'function') {
        return func[util_promisify_custom].bind(context);
    }
    if (options && options.callbackIsFirstArg) {
        // duplicate some code here so we don't have to process this unusual
        // situation at runtime in the common case.
        return function() {
            var cb = arguments[0];
            if (typeof(cb) === 'function') {
                return func.apply(context, arguments);
            }
            var d = deferred(options);
            var a = [d.callback].concat(arguments);
            func.apply(context, a);
            return d.promise;
        };
    }
    return function() {
        var cb = arguments[arguments.length - 1];
        if (typeof(cb) === 'function') {
            return func.apply(context, arguments);
        }
        // ooh, promises.
        var d = deferred(options);
        var a = _slice.call(arguments, 0);
        while (a.length < mandatoryArgs) { a.push(undefined); }
        a.push(d.callback);
        var retval = func.apply(context, a);
        if (options && options.returnsObject) {
            // it would be nice to have a better convention here
            Object.defineProperty(retval, 'promise', { value: d.promise });
            return retval;
        }
        return d.promise;
    };
};
