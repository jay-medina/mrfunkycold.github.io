define(function (require) {
  'use strict';

  var AppManager = require('AppManager');
  var MainContainer = require('main/views/MainContainer');

  return {
    show: function() {
      AppManager.rootView.trigger('select:navBar');
      AppManager.rootView.mainRegion.show(new MainContainer());
    }
  };

});