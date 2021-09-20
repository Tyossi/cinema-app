import sideViewActionTypes from "./sideView.types";
import axios from "axios";

export const fetchSideViewMovieStart = () => ({
  type: sideViewActionTypes.FETCH_SIDEVIEW_MOVIE_START,
});
const fetchSideViewMovieSuccess = (movie) => ({
  type: sideViewActionTypes.FETCH_SIDEVIEW_MOVIE_SUCCESS,
  payload: movie,
});
const fetchSideViewMovieFailed = (error) => ({
  type: sideViewActionTypes.FETCH_SIDEVIEW_MOVIE_FAILED,
  payload: error,
});

export const fetchSideViewMovieAsync = (match) => {
  return async (dispatch) => {
    const url = `http://www.omdbapi.com/?i=${match.params.param}&plot=short&apikey=dc53bd4c`;
    dispatch(fetchSideViewMovieStart());

    return await axios
      .get(url)
      .then((response) => dispatch(fetchSideViewMovieSuccess(response.data)))
      .catch((error) => dispatch(fetchSideViewMovieFailed(error.message)));
    // const data = response.data;
    // dispatch(fetchMoviesSuccess(data));
  };
};
