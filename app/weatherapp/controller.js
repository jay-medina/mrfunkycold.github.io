define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var MainView = require('weatherapp/index');
  var WeatherItemDetailView = require('weatherapp/views/WeatherItemDetailView');
  var AppManager = require('AppManager');
  var WeatherList = require('weatherapp/entities/WeatherList');

  var controller = {};

  var list = new WeatherList([{city: 'New York, NY', temperature: 60}, 
                                {city: 'Seattle, WA', temperature: 50},
                                {city: 'Philadelphia, PA', temperature: 61}
                                ]);

  controller.show = function(){

    AppManager.rootView.trigger('select:navBar', 'projects');
    AppManager.rootView.mainRegion.show(new MainView({
      collection: list
    }));
  };

  controller.showListItemByName = function(name) {
    var item = list.findWhere({city: name});

    console.log(item);
  }

  controller.showListItemByModel = function(model) {
    AppManager.rootView.mainRegion.show(new WeatherItemDetailView({
      model: model
    }));
  };

  return controller;

});