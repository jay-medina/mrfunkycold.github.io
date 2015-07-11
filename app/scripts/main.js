require.config({
  paths: {
    'jquery': ['http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min', '../bower_components/jquery/dist/jquery'],
    'backbone': ['../bower_components/backbone/backbone'],
    'underscore': ['../bower_components/underscore/underscore-min'],
    'text': ['../bower_components/text/text'],
    'mustache': ['../bower_components/mustache/mustache'],
    'bootstrap': ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js', '../bower_components/dist/js/bootstrap.min.js'],
    'Templates': 'templates/Templates'
  }
});

define(function(require) {
  'use strict';

  var $main = $('.homepage_main');
  var DURATION = 400;

  var background_images = [
    'app/images/astoria.jpg',
    'app/images/mets.jpg',
    'app/images/queens.jpg',
    'app/images/working.jpg'
  ];

  var image_count = 0;

  function rotateImagesAfterTenSeconds() {
    setTimeout(rotateImages, 10000);
  }

  function createUrlString(url) {
    return 'url(' + url + ')';
  }

  function rotateImages() {

    $main.fadeOut(DURATION, function() {
      $main.css('background-image', createUrlString(background_images[image_count]));
      image_count += 1;

      if (image_count === background_images.length) {
        image_count = 0;
      }
      $main.fadeIn(DURATION, rotateImagesAfterTenSeconds);
    });
  }


  rotateImagesAfterTenSeconds();

});
