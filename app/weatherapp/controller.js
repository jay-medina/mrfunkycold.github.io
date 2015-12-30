define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var MainView = require('weatherapp/index');
  var WeatherItemDetailView = require('weatherapp/views/WeatherItemDetailView');
  var AppManager = require('AppManager');
  var WeatherList = require('weatherapp/entities/WeatherList');
  var controller = {};

  var collection = WeatherList.get();

  controller.show = function(){

    AppManager.rootView.trigger('select:navBar', 'projects');
    AppManager.rootView.mainRegion.show(new MainView({
      collection: collection
    }));
  };

  controller.showListItemByName = function(name) {
    var model = collection.findWhere({city: name});

    if(model) {
      this.showListItemByModel(model);
    }
    else {
      AppManager.navigate('/weatherlist');
      this.show();
    }
  }

  controller.showListItemByModel = function(model) {
    AppManager.rootView.mainRegion.show(new WeatherItemDetailView({
      model: model
    }));
  };

  AppManager.on('weatherapp:addCity', function(city) {
    collection.add({name: city});
  });

  return controller;

});