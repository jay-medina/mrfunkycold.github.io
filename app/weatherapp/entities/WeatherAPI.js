define(function (require) {
  'use strict';

  var $ = require('jquery');
  var URL = 'http://api.openweathermap.org/data/2.5/weather?q={0}&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';

  function fetchLocation(model) {

   return $.ajax({
      url: URL.replace('{0}', model.get('name'))
    }).then(function(data) {
      model.set(data);
    });

  }

  return {
    fetchLocation: fetchLocation
  };
  

});