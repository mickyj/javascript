$(document).ready(function () {

  var template_f = Handlebars.compile($('#post_template').html()); // Turn it into a template function.
  var $posts = $('#posts');

  var getPosts = function () { //get ajax req for us and stick on the page
    $.ajax ({
      url: 'posts.json',
      dataType: 'JSON'
    }).done(function (results) {
       $.each(results, function (i, post) {
      $posts.prepend(template_f(post));
        });
    });
  };

  getPosts();



  Handlebars.registerHelper('fullname', function (first, last) {
    return '<span class="first">' + first + '</span> <span class="last">' + last + '</span>';
  });

  Handlebars.registerHelper('priceWithGST', function (price) {
    var gstprice = price * 1.1;
    return gstprice.toFixed(2);
  });

  var $window = $(window) //this says go and get window int he brackets and turn it into a jquery object

  $window.scroll(function () {
    if ($window.height() + $window.scrollTop() >= $(document).height()) {
      getPosts();
    }
  });

});