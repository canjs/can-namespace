var QUnit = require('steal-qunit');
var plugin = require('./can-namespace');

QUnit.module('can-namespace');

QUnit.test('should export an empty object', function(){
  QUnit.deepEqual(plugin, {});
});
