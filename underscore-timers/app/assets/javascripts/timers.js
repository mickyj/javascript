$(document).ready(function () {

  var numbers = [];
  var timer = null;

  //timer stuff

  var start_timer = function () {
    timer = setInterval(generate_random_number, 500);  // run the gen function every 500 milliseconds
  };

  var stop_timer = function () {
      clearInterval(timer);
  };

  var generate_random_number = function () {
    var number = _.random(0,1000);
    numbers.push(number); //keep them in memory
    create_number_box(number);  //puts it on the page
 };

  $('#start').click(start_timer);
  $('#stop').click(stop_timer);

  var add_number = function () {
    // Extract number and add it to our array.
    var number = parseInt($('#number').val());
    numbers.push(number);

    // Create a new box for our new number.
    var $box = $('<div/>');
    $box.addClass('box');
    $box.text(number);

    // Add box to page and reset the form.
    $('#boxes').prepend($box);
    $('#number').val('').focus();
  };

  $('#add_number').click(add_number);

  var square = function () {
    empty_boxes();
    numbers = _.map(numbers, function (n) {
      return n * n;
    });
    show_boxes();
};

  var empty_boxes = function () {
    $('#boxes').empty();
};

  var show_boxes = function () {
    _.each(numbers, create_number_box);
  }

  var create_number_box = function(n) {
    var $box = $('<div/>').addClass('box');
    $box.text(n);
    $('#boxes').prepend($box);
  }

  $('#square').click(square);

  var generic_function = function () {
    empty_boxes();
    numbers = _.map(numbers, funcky_calc);
    show_boxes();
  };

  var funcky_calc = function (i) {
    var equation = $('#number').val();
    return eval(equation);
  };

  $('#fn').click(generic_function);

});




//   var  arr = ['groucho','harpo','chico'];

// //underscore version
//   _.each(arr, function (el, i) {
//   alert( 'element number ' + 1 + ': ' + el );
//   });
// });

//   //native js

//   for (var i = 0; i < arr.length; i++) {
//     alert( 'element number' + i + ': ' + arr[i]);
//   }


// var uppers = .map(arr, function (brother) {
//   return brother.toUpperCase();
// }

//   console.log(arr, uppers);

// }
