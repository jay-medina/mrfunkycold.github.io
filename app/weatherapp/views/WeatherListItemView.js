define(function (require) {
  'use strict';

  var Backbone = require('backbone');

  var WeatherListItemView = Backbone.View.extend({

    render: function(){
      this.$el.append(this.model.get('city'));
      this.$el.append(this.model.get('temperature'));

      return this;
    }

  });

  return WeatherListItemView;
});