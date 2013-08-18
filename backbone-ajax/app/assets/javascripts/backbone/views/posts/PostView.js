var app  = app || {};
  // View for a single post
app.PostView = Backbone.View.extend({
    el: '#main', //the el #main is where this is going to end up on the page
    initialize: function () {
      // We're rendering from the initilaise probably don't do this

      this.model.on('change',this.render, this); //the change is driven by the fetch function

      this.model.on('comments', this.renderComments, this);
        },

    render: function () {
        var template = Handlebars.compile(app.templates.blogView);
        this.$el.html( template(this.model.toJSON()) );

        this.comments = this.$el.find('.comments'); //this associates the comments with the postview
        this.model.fetchComments();




        return this;
      },


    renderComments: function() {
        this.model.comments.each(function(comment) {
        var view = new app.CommentListView({model: comment});
        this.comments.append(view.render().el);
        },  this);
        }
  });