$(document).ready(function () {
  var index;
  var photos;
  var timer;


    var search_flickr = function () {
          var search = $('#search').val();
          var page = 1;

        var results = function (data) { //when results gets called, it passes in the (data) via json

          var delay = parseInt($('#delay').val());
            delay = delay * 1000; //converts seconds to milliseconds for set interval()
            index = 0; //has to set up so it starts at the beginning of the array
            photos = data.photos.photo; //because flickr nests the photo inside 2 other objects, this is how you get it

            timer = setInterval(display_photo, delay); //calls the display photo function every delay milliseconds, is an id
        };

      var display_photo = function () {
          var photo = photos[index++]; //start with the 0 photo of the index, adds another, and another, which is what ++ does


          if(photo != undefined){

          var url = "url(http://farm" + photo.farm + ".static.flickr.com/" +photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg)"; //gets url in flickr format
          var $image = $('<img>').addClass('image'); //adds an image tag and class for $image

          var width = $('#width').val(); //define width of photo
          var height = $('#height').val(); //define height of photo

          $image.css('background-image', url); //sets the background image via css
          $image.css({
              'background-image': url,
              'width': width,
              'height': height
          });  //above customizes the image via the css via json

          $('#images').prepend($image); //adds the image via prepend

          $image.hide().fadeIn(); //fa

           }else{
            clearInterval(timer)
            page = page +1;};
            search_flickr();
            return;
            console.log('Im a page')
          };
             $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f098c62d9ff5fb72382a41e055b30b41&text=' + search + '&per_page=500&page=' + page + '&format=json&jsoncallback=?', results);
      };             //when json resuts come back process the results function

      $('#flickr').click(search_flickr);

      var clear_photos = function () {
          $('#images').empty();
          };
          $('#clear').click(clear_photos);
});



      //"http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
      //http://farm4".static.flickr.com/3778/9306123768_cac207cc1e_m.jpg
