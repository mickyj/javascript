// control the include order of our backbone app

//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers


var app = app || {};

// Object to hold the template HTML
  app.templates = {
    appView: '<h1>Recent Posts</h1><ul id="posts"></ul>',
    blogList: '{{title}}',
    blogView:'<div class="post"><h1 class="title">{{ title }}</h1><h3 class="slug">{{ slug }}</h3><div class="content">{{{ content }}}</div><ul class="comments"></ul></div>',
    commentList: '<p>{{created_at}} - {{twaddle}}</p>' //Joel added this for a place to put the comments...what is the created at part?
  };

$(document).ready(function () {

app.router = new app.AppRouter(); //instantiate a router, now look for a router to see whats being defined
Backbone.history.start();
});

// ({pushState: false}); //nice looking urls

// Backbone.history.on('route', function () {
//   var fragment = Backbone.history.getFragment();
//   console.log('The user navigated to', fragment);
//   });









