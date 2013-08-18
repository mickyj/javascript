var app  = app || {};

app.AppRouter = Backbone.Router.extend ({ //here are the two routes
    routes: {
      '': "index", //route one
      'posts/:slug': 'getPost' //route two
    },

    initialize: function (options) {
      this.options = options;
      //make this more interesting
      this.posts = new app.Posts([
        new app.Post({title: 't1', slug: 't1', content: 'Test one'}),
        new app.Post({title: 't2', slug: 't2', content: 'Test two'}),
        new app.Post({title: 't3', slug: 't3', content: 'Test three'}),
        new app.Post({title: 't4', slug: 't4', content: 'Test four'})
         ]);
    },

    index: function () { //this creates the app view with a collection of posts and then renders the view
      var appView = new app.AppView({collection: this.posts});
      appView.render();
    },

    getPost: function (slug) { //if they want to look at post/'someslug'...so slug gets passed in and we want to get teh post of that particular slug and show the post of that slug. The render is happening inside the post view via initialize
      var post = this.posts.get(slug); //if we didnt change the default setting from id's to slugs, it now looks up the slug
      new app.PostView({model: post});
    }
  });