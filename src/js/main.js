import { getMovies } from "./request.js";


getMovies('/movie/popular', '.popular');
getMovies('/movie/top_rated', '.top_rated');
getMovies('/movie/upcoming', '.upcoming');


