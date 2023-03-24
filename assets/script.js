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


  if (movie == false) {
    console.log('Please enter a movie title.');
    return;
  }
  var queryString = 'http://www.omdbapi.com/?t=' + movie + key 
  var youTube = 'https://www.googleapis.com/youtube/v3/search?q=' + movie +"trailer" + youKey ;
  //location.assign('./search-results.html?q=' + queryString);
  
   fetch(queryString)
   .then(function (response) {
    return response.json();
 })
 .then(function (data) {
    console.log(data);
    document.getElementById('apiResponse').innerHTML = JSON.stringify(data);
  });


   fetch(youTube)
   .then(function (response) {
      return response.json();
   })
   .then(function (data) {
      console.log(data);
      
    });

  //console.log(movie); redundant
  
}

//


  titleEl.on('submit', handleFormSubmit);

    $(document).ready(function(){
        let apiKey = "AIzaSyB5faftGXgqJpv-C13VoHtm_UDWcPkovvs"
     
        $("form").submit((e) => {
            e.preventDefault()
            let search = $("#title").val()
            videoSearch(apiKey,search,1)
        })
    })
     
    function videoSearch(apiKey,search,maxResults){
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,(data) => {
            console.log(data)
            
            let video = ''
     
            data.items.forEach(item => {
                video = `
                <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                `
     
                $("#videos").append(video)
            });
        })
     
    }