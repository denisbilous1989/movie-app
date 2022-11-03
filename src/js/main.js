import { getMovies, getMovieDetails } from "./request.js";
import { searchMovies } from "./search.js";

searchMovies();


checkUrl();

window.addEventListener('hashchange', (e) => {

  checkUrl();

});





function checkUrl () {
  const [hash, movieId] = location.hash.split('=');

  if(hash === '#movieid') {
    getMovieDetails(movieId);
  } else {
    getMovies('movie/popular');
    getMovies('movie/top_rated');
    getMovies('movie/upcoming');
  }
}

// function checkUrl2 () {
//   const [hash, movieId] = location.hash.split('=');

//   if(hash === '#search') {
//     searchMovies();
//   } else {
//     getMovies('movie/popular');
//     getMovies('movie/top_rated');
//     getMovies('movie/upcoming');
//   }
// }

