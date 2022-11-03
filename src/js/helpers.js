import { generateDate, generateImgUrl, generatePopularity, generateTitle, generateClassName, getColor } from "./utils";


export const renderMovies = (movies, path) => (`

    <div class="container">
        <h2 class="title">${generateTitle(path) + ' Movies'}</h2>
        <div class="${generateClassName(path)}">
        ${movies.map(movie => renderMovieCard(movie)).join('')}
        </div>
    </div>
`)


export const renderMovieCard = ({ id, poster_path, original_title, release_date, vote_average}) => (`
     <div class="movie">
         <a href="#movieid=${id}">
            <img src="${generateImgUrl(poster_path)}" alt="${original_title}">
         </a>
         <div class="movie_content">
            <div class="title">${original_title}</div>
            <div class="date">${generateDate(release_date)}</div>
            <div class="raiting ${getColor(vote_average)}">${generatePopularity(vote_average)}</div>
         </div>
     </div>
`)

export const renderMovieDetails = movie => (`

    <div class="container">
        <div class="single">
        ${renderDetailCard(movie)}
        </div>
    </div>
`)


export const renderDetailCard = ( {poster_path, original_title, overview, release_date, vote_average }) => (`
   <div class="single_movie">
      <img src="${generateImgUrl(poster_path)}" alt="${original_title}">
      <div class="single_content">
      <h2>${original_title}</h2>
      <p class="release_date">${generateDate(release_date)}</p>
      <p class="overview">Overview: ${overview}</p>
      <p class="rate ${getColor(vote_average)}">${generatePopularity(vote_average)}</p>
      </div>
   </div>
`)


export const renderFilterdMovies = movies => {
   console.log('filtered movies', movies);
   return (`

   <div class="container">
     <h2 class="title">Filtered Movies</h2>
     <div class="filtered">
     ${movies.map(movie => renderFileredMovie(movie)).join('')}
     </div>
   </div>
`)
}


export const renderFileredMovie = ({ id, poster_path, original_title, overview, release_date, vote_average }) => (`
   <div class="filtered_movie">
       <a href="#movieid=${id}">
        <img src="${generateImgUrl(poster_path)}" alt="${original_title}">
      </a>
      <div class="filtered_content">
      <h2>${original_title}</h2>
      <p class="release_date">${generateDate(release_date)}</p>
      <p class="overview">Overview: ${overview}</p>
      <p class="rate ${getColor(vote_average)}">${generatePopularity(vote_average)}</p>
      </div>
   </div>
`)


export const renderError = ({ status_code, status_message }) => (`

    <div class="container">
        <div class="error">
           <h2>Status code: ${status_code}</h2>
           <p>Status message: ${status_message}</p>
        </div>
    </div>
`)



