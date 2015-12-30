define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var Mustache = require('mustache');
  var template = require('text!weatherapp/templates/WeatherListItem.html');

  var WeatherListItemView = Backbone.View.extend({
    className: 'weatherapp_list-item col-sm-4',
    template: template,
    events: {
      'mouseover' : '_showRemoveBtn',
      'mouseleave' : '_hideRemoveBtn',
      'click .js-remove': '_deleteListItem',
      'click' : '_goToWeatherItemPage'
    },
    initialize: function(){
      this.listenTo(this.model, 'change', this.render.bind(this));
    },
    compileHtml: function() {
      return Mustache.render(this.template, this.getTemplateData());
    },
    getTemplateData: function() {
      var main = this.model.get('main');
      var temp = main? main.temp : '';

      return {
        city: this.model.get('name'),
        temperature: temp
      };
    },
    render: function(){
      this.$el.html(this.compileHtml());
      return this;
    },
    _showRemoveBtn: function () {
      this.$('.js-remove').addClass('show');
    },
    _hideRemoveBtn: function () {
      this.$('.js-remove').removeClass('show');
    },
    _deleteListItem: function (e) {
      e.stopPropagation();

      this.model.clear();
      this.model.destroy();
    },
    _goToWeatherItemPage: function () {
      this.trigger('display:weatherItem', this.model);
    }

  });

  return WeatherListItemView;
});