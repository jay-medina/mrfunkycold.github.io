define(function (require) {
  'use strict';

  var MainView = require('weatherapp/index');
  var AppManager = require('AppManager');

  function show(){
    AppManager.rootView.mainRegion.show(new MainView());
  }

  return {
    show: show
  };

});