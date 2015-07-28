require.config({
  enforceDefine: true,
  paths: {
    'jquery': ['https://code.jquery.com/jquery-2.1.4.min', '../bower_components/jquery/dist/jquery'],
    'backbone': ['https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone-min', '../bower_components/backbone/backbone'],
    'underscore': ['https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min', '../bower_components/underscore/underscore-min'],
    'text': ['https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min', '../bower_components/text/text'],
    'mustache': ['https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.1.3/mustache.min', '../bower_components/mustache/mustache'],
    'bootstrap': ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min', '../bower_components/dist/js/bootstrap.min.js'],
    'Templates': 'templates/Templates',
    'marionette': ['https://cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.4.2/backbone.marionette.min', '../bower_components/marionette/lib/backbone.marionette.min.js']
  }
});

define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Mustache = require('mustache');
  var Marionette = require('marionette');
  var MainLayout = require('views/MainLayout');

  Marionette.Renderer.render = function(template, data) {
    return Mustache.render(template, data);
  };

  var myApp = new Marionette.Application();

  myApp.rootView = new MainLayout({
    el: 'body'
  });

  myApp.on('start', function() {
    Backbone.history.start();
    myApp.rootView.render();
  });

  myApp.start();

});
