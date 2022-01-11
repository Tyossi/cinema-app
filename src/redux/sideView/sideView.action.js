import sideViewActionTypes from "./sideView.types";
import axios from "axios";

export const fetchSideViewMovieStart = () => ({
  type: sideViewActionTypes.FETCH_SIDEVIEW_MOVIE_START,
});
export const fetchSideViewMovieSuccess = (movie) => ({
  type: sideViewActionTypes.FETCH_SIDEVIEW_MOVIE_SUCCESS,
  payload: movie,
});
export const fetchSideViewMovieFailed = (error) => ({
  type: sideViewActionTypes.FETCH_SIDEVIEW_MOVIE_FAILED,
  payload: error,
});
export const saveSideViewIdToState = (id) => ({
  type: sideViewActionTypes.SAVE_SIDEVIEW_ID,
  payload: id,
});

export const fetchSideViewMovieAsync = (match) => {
  const parameter = match.params.id ? match.params.id : match.params.param;

  const apiKey = "dc53bd4c";
  return async (dispatch) => {
    const url = `https://www.omdbapi.com/?i=${parameter}&apikey=${apiKey}`;
    dispatch(fetchSideViewMovieStart());

    const result = await axios
      .get(url)
      .then((results) => dispatch(fetchSideViewMovieSuccess(results.data)))
      .catch((error) => dispatch(fetchSideViewMovieFailed(error.message)));

    return result;
  };
};
