define(function (require) {
  'use strict';

  var Backbone = require('backbone');

  var WeatherModel = Backbone.Model.extend({
    defaults: {
      city: '',
      temperature: ''
    }
  });

  return WeatherModel;
});