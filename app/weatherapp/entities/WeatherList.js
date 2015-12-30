define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var LocalStorage = require('weatherapp/entities/LocalStorage');
  var WeatherModel = require('weatherapp/entities/WeatherModel');

  var keyName = 'WEATHERLIST';

  var weatherListJSON = JSON.parse(LocalStorage.get(keyName));

  var weatherList = new Backbone.Collection(weatherListJSON, {
    model: WeatherModel
  });

  function setCollectionToLocalStorage(){
    var stringified = JSON.stringify(weatherList.toJSON());

    LocalStorage.set(keyName, stringified);
  }

  weatherList.on('add', setCollectionToLocalStorage);
  weatherList.on('remove', setCollectionToLocalStorage);

  return {
    get: function() {
      return weatherList; 
    }
  };

});