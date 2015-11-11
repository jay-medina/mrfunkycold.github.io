define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var Mustache = require('mustache');

  var template = require('text!weatherapp/templates/WeatherListItem.html');

  var WeatherListItemView = Backbone.View.extend({
    className: 'row weatherapp_list-item',
    template: template,
    compileHtml: function() {
      return Mustache.render(this.template, this.getTemplateData());
    },
    getTemplateData: function() {
      return this.model.toJSON();
    },
    render: function(){
      this.$el.html(this.compileHtml());
      return this;
    }

  });

  return WeatherListItemView;
});