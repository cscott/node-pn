# P

The `P` library gives you the Promise-using node standard library
you've always dreamed of.

Just about every node standard library method that takes a callback will now
return a `Promise` iff no callback is supplied.

See below for a few exceptions and odd cases.

## Installation
```
npm install P
```
## Usage
```
var fs = require('P/fs');
fs.writeFile('foo', 'bar', 'utf-8').then(function() { console.log('done'); });
```

This library uses only the node native promises, and thus works with
node >= 0.11.

You can use the [`es6-shim`](https://www.npmjs.org/package/promised-node)
to add ES6 Promises to earlier versions of node, for example:
```
require('es6-shim');
var fs = require('P/fs');
```
Just be sure that `es6-shim` is loaded before the `P` package in that
case.

You might also want to look into packages like
[`prfun`](https://www.npmjs.org/package/prfun)
which add some helpers to make working with native promises much more
fun.

In particular, the `Promise#done` method is very useful when
debugging, at least until v8's native Promise debugging
capabilities are completed.

## Related packages

Here are some other packages with similar aims:
* [`promised-node`](https://www.npmjs.org/package/promised-node)

## License

Copyright (c) 2014 C. Scott Ananian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
