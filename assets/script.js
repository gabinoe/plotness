

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






// var apikey = "5h8d2dcjhd9a98uacd4g2pvm"
// var secret = "sU3qdnUfEJ"
// var timeStamp = Date.now()


// var signature =  `${apikey} ${secret} ${timeStamp}`; console.log(signature)
// //requestUrl = `http://api.rottentomatoes.com/api/public/v1.0.json?apikey=${apikey}sig=${signature}`;
requestUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=9b055176'
fetch(requestUrl )
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });