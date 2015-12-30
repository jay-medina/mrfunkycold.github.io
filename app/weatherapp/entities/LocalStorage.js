define(function (require) {
  'use strict';

  var localStorage = window.localStorage;

  return {
    get: function(keyName) {
      return localStorage.getItem(keyName);
    },
    
    set: function (keyName, json) {
      localStorage.setItem(keyName, json);
    }
  };
});