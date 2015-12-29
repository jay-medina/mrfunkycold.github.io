define(function(require){
  'use strict';

  var Backbone = require('backbone');

  var WeatherItemDetailView = Backbone.View.extend({
    render: function(){
      this.$el.html(JSON.stringify(this.model.toJSON()));

      return this;
    }
  });

  return WeatherItemDetailView;

});