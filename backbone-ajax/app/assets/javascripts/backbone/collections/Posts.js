var app = app || {}

// Create a collection of blog posts

app.Posts = Backbone.Collection.extend({
  url: '/posts',
  model: app.Post


});


