define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var Marionette = require('marionette');
  var Mustache = require('mustache');
  var MainLayout = require('main/views/MainLayout');

  Marionette.Renderer.render = function(template, data) {
    return Mustache.render(template, data);
  };

  var AppManager = new Marionette.Application();

  AppManager.on('start', function(){
    AppManager.rootView = new MainLayout({
      el: 'body'
    }).render();
    
  });

  AppManager.navigate = function(route, options) {
    options = options || {};
    Backbone.history.navigate(route, options);
  };

  AppManager.getCurrentRoute = function() {
    return Backbone.history.fragment;
  };

  return AppManager;
});