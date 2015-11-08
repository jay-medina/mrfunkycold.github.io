define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var Marionette = require('marionette');
  var AppManager = require('AppManager');

  var AppRouter = Marionette.AppRouter.extend({
    appRoutes: {
      'weatherlist' : 'weatherlist'
    },
    routes: {
      '': 'defaultRoute'
    },
    controller: {
      weatherlist: function(){
        AppManager.trigger('app:weatherlist');
      }
    },
    defaultRoute: function() {
      AppManager.navigate('main');
    }
  });

  function configureController() {
    AppManager.on('app:weatherlist', function() {
      console.log('navigate to weatherlist');
      console.log(AppManager.rootView.$el);
    });
  }

  AppManager.on('start', function() {
    configureController();

    new AppRouter();

    Backbone.history.start();
  });

});