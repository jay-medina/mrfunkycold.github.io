define(function (require) {
  'use strict';

  var Backbone = require('backbone');

  var MyView = Backbone.View.extend({
    render: function() {
      this.$el.html('A different view');

      return this;
    }
  });

  return MyView;
});