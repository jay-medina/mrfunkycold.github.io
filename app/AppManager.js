define(function (require) {
  'use strict';

  var Marionette = require('marionette');
  var Mustache = require('mustache');
  var MainLayout = require('main/views/MainLayout');

  Marionette.Renderer.render = function(template, data) {
    return Mustache.render(template, data);
  };

  var myApp = new Marionette.Application();

  myApp.rootView = new MainLayout({
    el: 'body'
  });

  myApp.on('start', function() {
    myApp.rootView.render();
  });

  return myApp;

});