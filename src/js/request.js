import { generateUrl } from "./utils.js";
import { renderMovieCard } from "./helpers.js";

export const getMovies = (path, selector) => {
fetch(generateUrl(path))
.then(res => res.json())
.then(data => {

  console.log('data', data.results);

  const movies = data.results.map(movie => renderMovieCard(movie)).join('');

  document.querySelector(selector).innerHTML = movies;
})
}

