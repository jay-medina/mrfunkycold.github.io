define(function (require) {
  'use strict';

  var AppManager = require('AppManager');
  var WeatherController = require('weatherapp/controller');

  var WeatherRouter = {
    appRoutes: {
      'weatherlist': 'weatherlist',
      'weatherlist/:item' : 'weatherItemPage'
    },
    controller: {
      weatherlist: function(){
        AppManager.trigger('app:weatherlist');
      },
      weatherItemPage: function(itemName) {
        AppManager.trigger('app:weatherlistItem', itemName);
      }
    }
  };

  AppManager.on('app:weatherlist', function() {
    WeatherController.show();
  });

  AppManager.on('app:weatherlistItem', function(itemName) {
    WeatherController.showListItemByName(itemName);
  });

  AppManager.on('display:weatherItem', function(model) {
    AppManager.navigate('weatherlist/' + model.get('city'));  
    WeatherController.showListItemByModel(model);
  })

  return WeatherRouter;
  
});