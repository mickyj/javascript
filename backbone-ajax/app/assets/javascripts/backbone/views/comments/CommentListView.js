var app = app || {}

// Create a template for the home page blog post subview
app.CommentListView = Backbone.View.extend({
  tagName: 'li',

// if there is a click event run the view function
  events: {
    'change': this.render //ask why this different than 'views for postlist view and there is no click'
  },

  initialize: function () {
},
  // this sticks the new list item in the page
  render: function () {
    var template = Handlebars.compile( app.templates.commentList ); //had to add a commentList area in the handlebars template
    this.$el.html( template(this.model.toJSON()) ); // renders the data to JSON

    // returning this lets us chain our code
    return this;
  }
});



