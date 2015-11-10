define(function (require) {
  'use strict';

  var AppManager = require('AppManager');
  var WeatherController = require('weatherapp/controller');

  var WeatherRouter = {
    appRoutes: {
      'weatherlist': 'weatherlist'
    },
    controller: {
      weatherlist: function(){
        AppManager.trigger('app:weatherlist');
      }
    }
  };

  AppManager.on('app:weatherlist', function() {
    WeatherController.show();
  });

  return WeatherRouter;
  
});