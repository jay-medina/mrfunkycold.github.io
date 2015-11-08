define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var MainContainer = require('main/views/MainContainer');
  var Templates = require('main/templates/Templates');

  var NavBar = Marionette.ItemView.extend({
    className: 'container',
    template: Templates.NavBar
  });

  var Footer = Marionette.ItemView.extend({
    tagName: 'footer',
    className: 'container',
    template: Templates.Footer
  });

  var MainLayout = Marionette.LayoutView.extend({
    template: Templates.MainLayout,
    regions: {
      navBarRegion: '.my__nav-bar',
      mainRegion: '.my__main-container',
      footerRegion: '.my__footer'
    },
    onRender: function() {
      this.navBarRegion.show(new NavBar());
      this.mainRegion.show(new MainContainer());
      this.footerRegion.show(new Footer());
    }
  });

  return MainLayout;
});
