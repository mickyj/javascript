var app = app || {}

// Create the app router

app.AppRouter = Backbone.Router.extend ({ //here are the two routes
    routes: {
      '': "index", //route one, on the left is the path and the right is the string it needs to pass
      'posts/:slug': 'getPost', //route two
    },

    initialize: function (options) {
      this.options = options;
      //make this more interesting

    },

    index: function () { //this creates the app view with a collection of posts and then renders the view
      new app.AppView({collection: new app.Posts()});
    },

    getPost: function (slug) { //if they want to look at post/'someslug'...so slug gets passed in and we want to get teh post of that particular slug and show the post of that slug. The render is happening inside the post view via initialize
      var post = new app.Post({slug:slug}); //if we didnt change the default setting from id's to slugs, it now looks up the slug
      new app.PostView({model: post});
      post.fetch();
    }



  });
