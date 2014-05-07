var assert = require('assert');

var stretch = require('../');

assert.deepEqual([0, 0, 1, 1, 0, 0], stretch([0, 1, 0], 6));
assert.deepEqual([0, 0, 0, 1, 1, 1, 0, 0, 0], stretch([0, 1, 0], 9));
