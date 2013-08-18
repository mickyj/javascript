var app = app || {}

// Create a model for the posts

// our only model
app.Post = Backbone.Model.extend({
   urlRoot: '/posts',
  // Use slug instead of id to refer to these objects
  idAttribute: 'slug', //their identified by their slugs not id numbers

  defaults: { //these are the attributes of the model
   //this matches it to the server
   title: 'New Post',
   slug: 'new-post',
   content: 'content',
    comments: []
  },

  fetchComments: function () {
    var post = this; //save post to use in the success handler

    post.comments = new app.Comments();
    post.comments.post_id = post.get('id');
    post.comments.fetch({
      success: function () {
        post.trigger('comments'); //success handler publishes and now allows anyone who subscribed to this event to run
      }
    });
  }

});
