define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var WeatherListContainer = require('weatherapp/views/WeatherListContainer');

  var template = require('text!weatherapp/templates/WeatherAppMain.html');

  var ENTER_KEY = 13;

  var WeatherMain = Backbone.View.extend({
    template: template,
    className: 'container weatherapp',
    events: {
      'click .weatherapp_ok-btn' : 'saveInput',
      'keyup #cityInput' : 'saveInputOnEnterKey'
    },
    render: function() {
      this.$el.html(template);
      this.$cityInput = this.$('#cityInput');
      this.renderWeatherList();
      
      return this;
    },
    renderWeatherList: function() {
      var weatherList = new WeatherListContainer({
        collection: this.collection
      }).render();

      this.$('.weatherapp_weatherlist').html(weatherList.$el);
    },
    saveInputOnEnterKey: function(e) {
      if(e.which === ENTER_KEY) {
        this.saveInput();
      }

      return false;
    },
    saveInput: function() {
      alert(this.$cityInput.val());
    }
  });

  return WeatherMain;
});