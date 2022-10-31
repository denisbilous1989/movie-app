import { generateUrl } from "./utils.js";
import { renderMovies } from "./helpers.js";

export const getMovies = (path, selector) => {
fetch(generateUrl(path))
.then(res => res.json())
.then(data => {

  console.log('data', data);

  const element = document.querySelector(selector);

  element.innerHTML = renderMovies(data.results);
 
})
}
