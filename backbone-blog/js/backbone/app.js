var app  = app || {};


  app.templates = { //this is a place for our templates to pull from
  appView: '<h1>Recent Posts</h1><ul id="posts"></ul>',
  blogList: '<a href="#posts/{{slug}}"> {{ title }} </a>' ,
  blogView: '<div class="post"><h1 class="title">{{ title }}</h1><h3 class="slug">{{ slug }}</h3><div class="content">{{{ content }}}</div></div>'

};

$(document).ready(function () {

app.router = new app.AppRouter(); //instansiate a router, now look for a router to see whats being defined
Backbone.history.start({pushState: true}); //nice looking urls

Backbone.history.on('route', function () {
  var fragment = Backbone.history.getFragment();
  console.log('The user navigated to', fragment);
  });
});