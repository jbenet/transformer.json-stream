var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'json-stream',
  'description': 'Stream of JSON objects',
  'schema': "string"
});
