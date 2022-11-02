import { generateUrl } from "./utils.js";
import { renderMovies } from "./helpers.js";

export const getMovies = path => {
fetch(generateUrl(path))
.then(res => res.json())
.then(data => {

  console.log('data', data.results);

  document.querySelector('#root').innerHTML += renderMovies(data.results, path);
})
}
