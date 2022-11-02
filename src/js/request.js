import { generateUrl } from "./utils.js";
import { renderMovies, renderMovieDetails, renderError } from "./helpers.js";


export const getMovies = path => {
fetch(generateUrl(path))
.then(res => res.json())
.then(data => {

  console.log('data', data);
  const root = document.querySelector('#root');


  if(data.success === false) {
    root.innerHTML = renderError(data);
    console.log(data, 'dataError');
  } else {
    root.innerHTML += renderMovies(data.results, path);
  }
})
}


export const getMovieDetails = path => {
  fetch(generateUrl(path))
  .then(res => res.json())
  .then(data => {
  
    console.log('data', data);

    const root = document.querySelector('#root');


    if(data.success === false) {
      root.innerHTML = renderError(data);
    } else {
      root.innerHTML = renderMovieDetails(data);
    }
  })
}