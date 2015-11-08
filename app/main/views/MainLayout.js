define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var MainContainer = require('main/views/MainContainer');
  var Templates = require('main/templates/Templates');

  var NavBar = Marionette.ItemView.extend({
    className: 'container',
    template: Templates.NavBar,
    selectItem: function(className){
      this.$('.js-navbar li').removeClass('active');

      if(className){
        this.$('.js-navbar .js-'+className).addClass('active');
      }
      else {
        this.$('.js-home').addClass('active');
      }
    }
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
      this.showNavBar();
      this.mainRegion.show(new MainContainer());
      this.footerRegion.show(new Footer());
    },
    showNavBar: function() {
      var navBar = new NavBar();

      this.on('select:navBar', navBar.selectItem.bind(navBar));
      this.navBarRegion.show(navBar);
    }
  });

  return MainLayout;
});
