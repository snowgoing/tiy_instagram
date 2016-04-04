var fav = 0;
var Backbone = require('../lib/backbone-parse/backbone-parse');
var homePageTemplate = require('../../templates/homePageTemplate.html');
var detailPageTemplate = require('../../templates/detailPageTemplate.html');
var addPageTemplate = require('../../templates/addPageTemplate.html');
var editPageTemplate = require('../../templates/editPageTemplate.html');
var Pics = require('../collections/pics');
var Pic = require('../models/pic');
var $ = require('jquery');

require('font-awesome/css/font-awesome.min.css');

  var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start();
  },
  routes: {
    '': 'index',
    'pic/:picId': 'pic',
    'addNew': 'addNew', 
    'edit/:picId': 'edit'
  },
  index: function () {
    Pics.fetch({
      success:function(collection){
        var data = {picsData:collection.toJSON()};
        $("#container").html(homePageTemplate(data));
      }
    })
  }
  });

var router = new Router();

router.on('route:addNew', function (){
    $("#container").html(addPageTemplate());
  });

$('#container').on('click', '#addNewPic', function(e) {
   e.preventDefault();

   var pic = new Pic();

   pic.set({
      'image': $("#image").val(),
      'title': $("#title").val(),
      'description': $("#description").val()     
   });

   pic.save({}, {
    success: function(msg){
      console.log('success', msg);
    },
    error: function (msg) {
      console.log('error', msg);
    }
   });
});

$('#container').on('click', '#fav', function(e){
  e.preventDefault();
  fav += 1;

  var pic = new Pic({
    'objectId': $('#id1').val(),
    'fav': fav
  });

  pic.save({});
  $('.box').html(pic.fav);

})

$('#container').on('click', '#editPic', function(e) {
   e.preventDefault();

   var pic = new Pic();

   pic.set({
      'objectId': $('#objectId').val(),
      'image': $("#image").val(),
      'title': $("#title").val(),
      'description': $("#description").val()     
   });

   pic.save({}, {
    success: function(msg){
      console.log('success', msg);
    },
    error: function (msg) {
      console.log('error', msg);
    }
   });
});

router.on('route:pic', function (picId){
  var pic = new Pic({
    objectId: picId
  });



  pic.fetch({
    success:function(pic){
      $("#container").html(detailPageTemplate(pic));
    }
  })
})

router.on('route:edit', function (picId){
  var pic = new Pic({
    objectId: picId
  });



  pic.fetch({
    success:function(pic){
      $("#container").html(editPageTemplate(pic));
    }
  })
})

module.exports = router;