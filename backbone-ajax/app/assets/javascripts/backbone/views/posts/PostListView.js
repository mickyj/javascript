var app = app || {}

// Create a template for the home page blog post subview
app.PostListView = Backbone.View.extend({
  tagName: 'li',

// if there is a click event run the view function
  events: {
    'change': this.render,
    'click': 'view'
  },

  initialize: function () {
},
  // this sticks the new list item in the page
  render: function () {

    var template = Handlebars.compile( app.templates.blogList );
    this.$el.html( template(this.model.toJSON()) ); // explain what this line does

    // returning this lets us chain our code
    return this;

  },

  view: function () { //refered to the click event
//navigates to the slug of the current model, and pass true to trigger the event
    app.router.navigate('posts/' + this.model.get('slug'), true);
    return false;
  }
});
