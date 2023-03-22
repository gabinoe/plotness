yturl = 'https://www.googleapis.com/youtube/v3/search?q='
var youKey = '&key=AIzaSyB5faftGXgqJpv-C13VoHtm_UDWcPkovvs'
//var title = 'movie';
var key = '&apikey=9b055176'
var titleEl = $('#our-form')
//var titlebtnEl = $('#title-btn.pure-button')


function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  

  var movie = document.querySelector('#title').value


  if (!movie) {
    console.log('No Movie listed in form!');
    return;
  }
  var queryString = 'http://www.omdbapi.com/?t=' + movie + key 
  var youTube = 'https://www.googleapis.com/youtube/v3/search?q=' + movie +"reviews" + youKey ;
  //location.assign('./search-results.html?q=' + queryString);
  
   fetch(queryString)
   .then(function (response) {
    return response.json();
 })
 .then(function (data) {
    console.log(data);
  });


   fetch(youTube)
   .then(function (response) {
      return response.json();
   })
   .then(function (data) {
      console.log(data);
    });

  console.log(movie);
}




  titleEl.on('submit', handleFormSubmit);
