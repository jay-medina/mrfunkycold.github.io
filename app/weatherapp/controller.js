define(function (require) {
  'use strict';

  var MainView = require('weatherapp/index');
  var AppManager = require('AppManager');
  var WeatherList = require('weatherapp/entities/WeatherList');


  function show(){

    var list = new WeatherList([{city: 'New York, NY', temperature: 60}, 
                                {city: 'Seattle, WA', temperature: 50},
                                {city: 'Philadelphia, PA', temperature: 61}
                                ]);

    AppManager.rootView.trigger('select:navBar', 'projects');
    AppManager.rootView.mainRegion.show(new MainView({
      collection: list
    }));
  }

  return {
    show: show
  };

});