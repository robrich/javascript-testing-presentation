JavaScript Testing in Node, the Browser, and CI
===============================================

This is a presentation about testing JavaScript in various environments.  All tests use [mocha](https://npmjs.org/mocha) as the test runner and [chai](https://npmjs.org/chai) as the assertion framework.

Start folder:

1. Node
2. the Browser
3. CI (Karma runs in a headless browser from the command-line)

Compare your results to the done folder.

Testing scenarios
-----------------

- add.js: a straight return
- subtract.js: a callback function
- multiply.js: returns a promise
- divide.js: can your test spot the error in this class?
- ajax-lib.js: mock network call
