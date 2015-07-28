define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var NavBar = Marionette.ItemView.extend({
    className: 'container',
    template: Templates.NavBar
  });

  var MainContainer = Marionette.ItemView.extend({
    tagName: 'section',
    className: 'main-container',
    template: Templates.MainContainer
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
