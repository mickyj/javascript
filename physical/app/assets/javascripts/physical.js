$(document).ready(function () {
  var show_chart = function () {
    var activity = $('#activities').val(); //gets current clicked on activity and get json data via ajax,

    $.ajax({
      dataType: 'json',
      type: 'get',
      url: '/exercises/chart/' + activity
    }).done(process_activity);
  };

  var process_activity = function (exercises) { //runs whataver we got back via json and displays it
    $('#chart').empty();
    new Morris.Line({
      element: 'chart',
      data: exercises,
      xkey: 'completed',
      ykeys: ['value'],
      labels: ['Value']
    });
  };

  $('#show_chart').click(show_chart).trigger('click'); //trigger simulates the click on open (rather than needing it to open on dropdown)
});