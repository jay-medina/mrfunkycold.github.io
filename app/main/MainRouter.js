define(function (require) {
  'use strict';

  var AppManager = require('AppManager');
  var MainController = require('main/Controller');

  var AppRouter = {
    appRoutes: {
      'main': 'main'
    },
    controller: {
      main: function(){
        AppManager.trigger('app:main');
      }
    }
  };

  AppManager.on('app:main', function() {
    MainController.show();
  });

  return AppRouter;

});