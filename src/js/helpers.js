import { generateDate, generateImgUrl, generatePopularity } from "./utils";


// export const renderMovies = movies => (`
//       ${movies.map(movie => renderMovieCard(movie)).join('')}
// `)


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




