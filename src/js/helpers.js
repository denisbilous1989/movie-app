import { generateDate, generateImgUrl, generatePopularity, generateTitle } from "./utils";


export const renderMovies = (movies, path) => (`

    <div class="container">
        <h2 class="title">${generateTitle(path) + ' Movies'}</h2>
        <div class="${path}">
        ${movies.map(movie => renderMovieCard(movie)).join('')}
        </div>
    </div>
      
`)


export const renderMovieCard = ({ poster_path, original_title, release_date, vote_average}) => (`
     <div class="movie">
           <img src="${generateImgUrl(poster_path)}" alt="${original_title}">
         <div class="movie_content">
            <div class="title">${original_title}</div>
            <div class="date">${generateDate(release_date)}</div>
            <div class="raiting">${generatePopularity(vote_average)}</div>
         </div>
     </div>
`)




