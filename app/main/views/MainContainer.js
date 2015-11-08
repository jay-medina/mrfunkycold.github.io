define(function (require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('main/templates/Templates');


  var MainContainer = Marionette.ItemView.extend({
    tagName: 'section',
    className: 'main-container',
    template: Templates.MainContainer
  });

  return MainContainer;
});