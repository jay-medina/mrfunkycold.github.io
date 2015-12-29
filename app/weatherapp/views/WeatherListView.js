define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var AppManager = require('AppManager');
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
      var itemView = new WeatherListItemView({
        model: weatherItem
      }).render();

      itemView.on('display:weatherItem', function(model) {
        AppManager.trigger('display:weatherItem', model);
      });

      this.$el.append(itemView.$el);
    }
  });


  return WeatherListView;
});