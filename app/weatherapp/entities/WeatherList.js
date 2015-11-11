define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var WeatherModel = require('weatherapp/entities/WeatherModel');

  var WeatherList = Backbone.Collection.extend({
    model: WeatherModel
  });

  return WeatherList;
});