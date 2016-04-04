var $ = require('jquery');
var Pics = require('./collections/pics');
var Pic = require('./models/pic');
var homePageTemplate = require('../templates/homePageTemplate.html');
var pic = new Pic({});

  
  




$(document).ready(function(){
  var Router = require('./routes/router');

  $('body').on('click', 'a', function (e){
    e.preventDefault();
    var href = $(this).attr('href').substr(1);
    Router.navigate(href, {trigger:true});
  });

  

});