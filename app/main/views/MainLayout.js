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
      navBar: '.my__nav-bar',
      mainContainer: '.my__main-container',
      footer: '.my__footer'
    },
    onRender: function() {
      this.navBar.show(new NavBar());
      this.mainContainer.show(new MainContainer());
      this.footer.show(new Footer());
    }
  });

  return MainLayout;
});
