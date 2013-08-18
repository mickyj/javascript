var Animal = Backbone.Model.extend({
  urlRoot: '/animals', //this matches it to the server
  defaults: {
    type: 'animal',
    ecosystem: '',
    stripes: false
  },

  initialize: function () {
    //alert('I am an animal');
    this.on('change:type', function (model) {
      var type = model.get('type');
      alert(" I am now a " + type);
    });
  }

});

var Zoo = Backbone.Collection.extend({
  model: Animal,
  url: '/animals' //because this is selecting from a collection, the ajax will fetch all of them and you don't need to put root because it's not requesting a specific animal
});

var ZooView = Backbone.View.extend({
  el: '#main',

  events: {
    'click h1': 'headerClick' //any clicks on the h1 inside this view, if they are clicked run this header click function
  },

  initialize: function () {
    this.list = $('#animals');
  },

  render: function () {
    this.$el.html( $('#zoo-template').html() ); //puts the title in
    var template = Handlebars.compile($('#animal-template').html()); //generates handlebars
    this.collection.each(function (model) { //puts for each collection insice the model - run this function
      this.list.append(template(model.toJSON())); //the function just puts the animal on the page

    }, this); //just put this for convention
    return this;
  },

  headerClick: function () {
    alert('You clicked the header'); //this is the function that gets run once you clicked on the
  }

});

var AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "animals/:id": "viewAnimal",
    "*actions": "defaultRoute"
  },

  index: function () {
    alert("you found the homepage");
    var zooView = new ZooView({collection: gaZoo});
    zooView.render();

    },

  viewAnimal: function (id) {
    alert("now viewing animal " + id);
    },

  defaultRoute: function() {
    alert("default route reached");
    }
  })

var animal = new Animal({
  type: 'giraffe',
  ecosystem: 'savanna'
});

var animal1 = new Animal({type: 'giraffe', ecosystem: 'savanna'});
var animal2 = new Animal({type: 'zebra', ecosystem: 'savanna', stripes: 52});
var animal3 = new Animal({type: 'giraffe', ecosystem: 'savanna'});

var gaZoo = new Zoo([animal1, animal2, animal3]);


$(document).ready(function () {
// var zooView = new ZooView({collection: gaZoo});
// zooView.render();

var app_router = new AppRouter();
Backbone.history.start({pushState: Modernizr.history});
});

