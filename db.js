var level = require('level');
var db = level('/tmp/test.db');

db.put('foo', 'bar');
