define(function (require){
  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var Marionette = require('marionette');
  var AppManager = require('AppManager');
  var routers = [
    require('main/MainRouter'),
    require('weatherapp/WeatherRouter')
  ];

  var Router = Marionette.AppRouter.extend({
    routes: {
      '': 'defaultRoute'
    },
    defaultRoute: function() {
      AppManager.trigger('app:main');
    }
  });

  function build(objectName) {
    var li = _.map(routers, function(router){
      return router[objectName];
    });

    li.unshift({});
    return _.extend.apply(_, li);
  }

  AppManager.on('start', function() {
    new Router({
      appRoutes: build('appRoutes'),
      controller: build('controller')
    });

    if (Backbone.history){
      Backbone.history.start();
    }
  });

});