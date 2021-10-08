import backdropActionTypes from "./backdrop.actionTypes";

const INITIAL_STATE = {
  backdropState: false,
  backdropTwoState: false,
};

const backdropReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case backdropActionTypes.TOGGLE_BACKDROP_STATE:
      return {
        ...state,
        backdropState: !state.backdropState,
      };

    case backdropActionTypes.TOGGLE_BACKDROP_TWO_STATE:
      return {
        ...state,
        backdropTwoState: !state.backdropTwoState,
      };
    default:
      return state;
  }
};

export default backdropReducer;
