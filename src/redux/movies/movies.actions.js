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
    const url = `http://www.omdbapi.com/?s=${search}&apikey=dc53bd4c`;
    dispatch(fetchMoviesStart());

    return await axios
      .get(url)
      .then((response) => dispatch(fetchMoviesSuccess(response.data.Search)))
      .catch((error) => dispatch(fetchMoviesFailed(error.message)));
    // const data = response.data;
    // dispatch(fetchMoviesSuccess(data));
  };
};
