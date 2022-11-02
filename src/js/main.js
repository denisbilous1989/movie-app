import { getMovies, getMovieDetails } from "./request.js";



checkUrl();

window.addEventListener('hashchange', (e) => {

  checkUrl();
});


function checkUrl () {
  const [hash, movieId] = location.hash.split('=');

  if(hash === '#movieid') {
    getMovieDetails(movieId);
  } else {
    getMovies('popular');
    getMovies('top_rated');
    getMovies('upcoming');
  }
}