import { getFilteredMovies } from "./request.js";
import { generateUrl } from "./utils.js";


export const searchMovies = () => {
  const form = document.querySelector('.search_form');
  const search = document.querySelector('.input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTemp = search.value;

    location.hash = `#search=${searchTemp}`;

  })
}