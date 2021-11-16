import { moviesActionTypes } from "./movie.action.types";

const INITIAL__STATE = {
  movies: null,
  isFetching: false,
  erroMessage: "",
};

const moviesReducer = (state = INITIAL__STATE, action) => {
  switch (action.type) {
    case moviesActionTypes.MOVIES__FETCHING__START:
      return {
        ...state,
        isFetching: true,
      };

    case moviesActionTypes.MOVIE__FETCHING__SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };

    case moviesActionTypes.MOVIE__FETCHING__FAILED:
      return {
        ...state,
        isFetching: false,
        erroMessage: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
