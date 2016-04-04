var Backbone = require('../lib/backbone-parse/backbone-parse');
var PicModel = require('../models/pic');

var PicsCollection = Backbone.Collection.extend({
  model: PicModel,
  _parse_class_name: 'pic'
});

var Pics = new PicsCollection();

module.exports = Pics;