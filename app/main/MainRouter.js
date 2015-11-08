define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var Marionette = require('marionette');
  var AppManager = require('AppManager');
  var MainController = require('main/Controller');
  var WeatherController = require('weatherapp/controller');

  var AppRouter = Marionette.AppRouter.extend({
    appRoutes: {
      'weatherlist' : 'weatherlist',
      'main': 'main'
    },
    routes: {
      '': 'defaultRoute'
    },
    controller: {
      weatherlist: function(){
        AppManager.trigger('app:weatherlist');
      },
      main: function(){
        AppManager.trigger('app:main');
      }
    },
    defaultRoute: function() {
      AppManager.trigger('app:main');
    }
  });

  function configureController() {
    AppManager.on('app:weatherlist', function() {
      WeatherController.show();
    });

    AppManager.on('app:main', function() {
      MainController.show();
    });
  }

  AppManager.on('start', function() {
    configureController();

    new AppRouter();

    Backbone.history.start();
  });

});