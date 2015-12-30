define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var WeatherSearchbar = require('weatherapp/views/WeatherSearchbar');
  var WeatherListView = require('weatherapp/views/WeatherListView');

  var template = require('text!weatherapp/templates/WeatherAppMain.html');

  var WeatherMain = Backbone.View.extend({
    template: template,
    className: 'container weatherapp',
    render: function() {
      this.$el.html(template);
      this.renderSearchbar();
      this.renderWeatherList();
      
      return this;
    },
    renderSearchbar: function () {
      var searchbar = new WeatherSearchbar().render();

      this.$('.weatherapp_searchbar').html(searchbar.$el);
    },
    renderWeatherList: function() {
      var weatherList = new WeatherListView({
        collection: this.collection
      }).render();

      this.$('.weatherapp_weatherlist').html(weatherList.$el);
    }
    
  });

  return WeatherMain;
});