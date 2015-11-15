define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var WeatherListItemView = require('weatherapp/views/WeatherListItemView');

  var WeatherListView = Backbone.View.extend({
    className: 'row',
    initialize: function () {
      this.listenTo(this.collection, 'add', this.render.bind(this));
    },
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


  return WeatherListView;
});