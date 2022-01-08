import { moviesActionTypes } from "./movie.action.types";
import axios from "axios";

export const fetchMoviesStart = () => ({
  type: moviesActionTypes.MOVIES__FETCHING__START,
});

export const fetchMoviesSuccess = (movies) => ({
  type: moviesActionTypes.MOVIE__FETCHING__SUCCESS,
  payload: movies,
});

export const fetchMoviesFailed = (erroMessage) => ({
  type: moviesActionTypes.MOVIE__FETCHING__FAILED,
  payload: erroMessage,
});

export const fetchMoviesAsynchronously = (search) => {
  return async (dispatch) => {
    dispatch(fetchMoviesStart());
    // const apiKey = "d5265d163ef6f3964d8fe64245fac0f7";

    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`;
    const url = `http://www.omdbapi.com/?s=${search}&apikey=dc53bd4c`;

    return await axios
      .get(url)
      .then((response) => dispatch(fetchMoviesSuccess(response.data.Search)))
      .catch((error) => dispatch(fetchMoviesFailed(error.message)));
  };
};
