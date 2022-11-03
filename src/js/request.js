import { generateUrl } from "./utils.js";
import { renderMovies, renderMovieDetails, renderError, renderFilterdMovies } from "./helpers.js";


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
    document.querySelector('.single') ? document.querySelector('.single').remove() : root.innerHTML += renderMovies(data.results, path);
  }
})
}


export const getMovieDetails = path => {
  fetch(generateUrl('movie/'+ path))
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



export const getFilteredMovies = path => {
  fetch(path)
  .then(res => res.json())
  .then(data => {
  
    console.log('data', data);

    const root = document.querySelector('#root');


    if(data.success === false) {
      root.innerHTML = renderError(data);
    } else {
      root.innerHTML = renderFilterdMovies(data.results);
    }
  })
}