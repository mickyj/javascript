var app  = app || {};
  // View for a single post
app.PostView = Backbone.View.extend({
    el: '#main', //the el #main is where this is going to end up on the page
    initialize: function () {
      // We're rendering from the initilaise probably don't do this
        var template = Handlebars.compile(app.templates.blogView);
        this.$el.html( template(this.model.toJSON()) );
    }
  });