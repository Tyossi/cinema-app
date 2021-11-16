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
  const apiKey = "d5265d163ef6f3964d8fe64245fac0f7";
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/movie/${parameter}?api_key=${apiKey}`;
    dispatch(fetchSideViewMovieStart());

    return await axios
      .get(url)
      .then((results) => dispatch(fetchSideViewMovieSuccess(results.data)))
      .catch((error) => dispatch(fetchSideViewMovieFailed(error.message)));
  };
};
