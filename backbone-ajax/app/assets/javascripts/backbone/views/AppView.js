var app = app || {}

// Create the app/home view
app.AppView = Backbone.View.extend ({
    el: '#main', // where this is going to end up on the page
    initialize: function () {
      this.$el.html ( app.templates.appView ); //not using handlebars, no need to compile
      this.list = $('#posts'); //caching the #posts for later use

      this.collection.on('add', this.renderitem, this);


    if (this.collection.length === 0) {
      this.collection.fetch();
      }
    },

    renderitem: function (model) {
      var view = new app.PostListView({model: model}); // this is inputting the model info from the collection into a postlist view handlebar template
      this.list.append(view.render().el ); //appends the view you created to the postlist defined on line 8


    },


    render: function () {
    this.collection.each(function (post) {
      this.renderItem(post)
    }, this); // Pass in `this` as the scope of our each().
    return this; // Allow chaining again.
  }
  });

