import sideViewActionTypes from "./sideView.types";
import sideViewTypes from "./sideView.types";

const INITIAL_STATE = {
  isSideViewOpen: false,
  movie: { movie: {} },
  isFetching: false,
  errorMessage: "",
};

const sideViewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sideViewTypes.FETCH_SIDEVIEW_MOVIE_START:
      return {
        ...state,
        isFetching: !state.isFetching,
        isSideViewOpen: !state.isSideViewOpen,
      };

    case sideViewActionTypes.FETCH_SIDEVIEW_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        isFetching: !state.isFetching,
      };

    case sideViewActionTypes.FETCH_SIDEVIEW_MOVIE_FAILED:
      return {
        ...state,
        isFetching: !state.isFetching,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default sideViewReducer;
