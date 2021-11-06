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
  // if (match.params.id) {
  const parameter = match.params.id ? match.params.id : match.params.param;
  return async (dispatch) => {
    const url = `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=${parameter}&plot=short&apikey=dc53bd4c`;
    dispatch(fetchSideViewMovieStart());

    return await axios
      .get(url)
      .then((response) => dispatch(fetchSideViewMovieSuccess(response.data)))
      .catch((error) => dispatch(fetchSideViewMovieFailed(error.message)));
    // const data = response.data;
    // dispatch(fetchMoviesSuccess(data));
  };
  // } else {
  // return async (dispatch) => {
  //   const url = `http://www.omdbapi.com/?i=${match.params.param}&plot=short&apikey=dc53bd4c`;
  //   dispatch(fetchSideViewMovieStart());

  //   return await axios
  //     .get(url)
  //     .then((response) => dispatch(fetchSideViewMovieSuccess(response.data)))
  //     .catch((error) => dispatch(fetchSideViewMovieFailed(error.message)));
  //   // const data = response.data;
  //   // dispatch(fetchMoviesSuccess(data));
  // };
  // }
};
