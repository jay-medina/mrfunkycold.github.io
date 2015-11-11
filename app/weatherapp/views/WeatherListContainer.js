define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var WeatherListItemView = require('weatherapp/views/WeatherListItemView');

  var WeatherListContainer = Backbone.View.extend({
    className: 'container',
    render: function(){
      this.$el.html('');
      this.collection.each(this.renderWeatherItem.bind(this));

      return this;
    },
    renderWeatherItem: function(weatherItem) {
      this.$el.append(new WeatherListItemView({
        model: weatherItem
      }).render().$el);
    }
  });


  return WeatherListContainer;
});