var app  = app || {}; //create a new variable called var , if app already exists, we'll just leave it, otherwise we'll make it empty array and new stuff will get pushed into it



// our only model
app.Post = Backbone.Model.extend({
  // Use slug instead of id to refer to these objects
  idAttribute: 'slug', //their identified by their slugs not id numbers

  defaults: { //these are the attributes of the model
   title: 'New Post',
   slug: 'new-post',
   content: 'content'
  }

});