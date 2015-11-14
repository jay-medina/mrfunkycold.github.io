define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var template = require('text!weatherapp/templates/WeatherSearchbar.html');

  var ENTER_KEY = 13;

  var WeatherSearchbar = Backbone.View.extend({
    template: template,
    className: 'row form-horizontal weatherapp_inputform',
    events: {
      'click .weatherapp_search-btn' : 'saveInput',
      'keyup #cityInput' : 'saveInputOnEnterKey'
    },
    render: function () {
      this.$el.html(this.template);
      this.$cityInput = this.$('#cityInput');

      return this;
    },
    saveInputOnEnterKey: function(e) {
      e.preventDefault();

      if(e.which === ENTER_KEY) {
        this.saveInput();
      }
    },
    saveInput: function() {
      var city = this.$cityInput.val();

      this.collection.add({city: city, temperature: 75});
    }
  });

  return WeatherSearchbar;
});