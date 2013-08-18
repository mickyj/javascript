var app  = app || {};
  // View for the entire app
  app.AppView = Backbone.View.extend ({
    el: '#main', // where this is going to end up on the page
    initialize: function () {
      this.$el.html ( app.templates.appView ); //not using handlebars, no need to compile
      this.list = $('#posts'); //caching the #posts for later use
    },

    render: function () {
      this.collection.each(function (post) {
        var view = new app.PostListView({model: post}); //New view for each post
        this.list.append( view.render().el ); // getting just the .el bit
      }, this); // pass in this as the scope of our each()
      return this; // Allow chaining again
    }
  });
