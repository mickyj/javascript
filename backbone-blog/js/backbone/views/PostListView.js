var app  = app || {};
// wrapping all the posts inside an li
 app.PostListView = Backbone.View.extend({
  tagName: 'li',

// if there is a click event run the view function
  events: {
    'click': 'view'
  },

  initialize: function () {
},
  // this sticks the new list item in the page
  render: function () {

    var template = Handlebars.compile( app.templates.blogList );
    this.$el.html( template(this.model.toJSON()) ); // explain what this line does

    // returning this lets us chaing our code
    return this;

  },

  view: function () { //refered to the click event
//navigates to the slug of the current model, and pass true to trigger the event
    app.router.navigate('posts/' + this.model.get('slug'), true);
    return false;
  }
});