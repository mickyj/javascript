var app  = app || {};
//Collection of posts
app.Posts = Backbone.Collection.extend({
  model: app.Post
});