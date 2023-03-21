requestUrl = 'http://www.omdbapi.com/?t=big&apikey=9b055176'
// need to get the value for title then concat api + title + key inside the requestUrl

var title = 'movie';
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

  location.assign(queryString);

  console.log(movie);
}
// const hashBrowser = val =>
//   crypto.subtle
//     .digest('SHA-256', new TextEncoder('utf-8').encode(secret))
//     .then(h => {
//       let hexes = [],
//         view = new DataView(h);
//       for (let i = 0; i < view.byteLength; i += 4)
//         hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
//       return hexes.join('');
//     });
// hashBrowser(
//   JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })
// ).then(console.log);

document.getElementById("#title-btn.pure-button"); addEventListener('submit', function () {
  fetch(requestUrl )
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  
});



// document.getElementById("this")
//   addEventListener("submit"){

//   }






// var apikey = "5h8d2dcjhd9a98uacd4g2pvm"
// var secret = "sU3qdnUfEJ"
// var timeStamp = Date.now()


// var signature =  `${apikey} ${secret} ${timeStamp}`; console.log(signature)
// //requestUrl = `http://api.rottentomatoes.com/api/public/v1.0.json?apikey=${apikey}sig=${signature}`;



  titleEl.on('submit', handleFormSubmit);
