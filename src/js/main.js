import './helpers.js';
import { generateUrl } from "./utils.js"

console.log('main js');

fetch(generateUrl('/movie/popular'))
.then(response => response.json())
.then (data => {
  console.log('data', data);
  const movies = data.results.map(({ poster_path, original_title, release_date, popularity }) => (`
  <div class="movie">
    <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
    <div class="title">${original_title}</div>
    <div class="date">${release_date}</div>
    <div class="raiting">${popularity}</div>
  </div>
  `)).join('');

  document.querySelector('.popular').innerHTML = movies;
})