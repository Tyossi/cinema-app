import backdropActionTypes from "./backdrop.actionTypes";

export const toggleBackdrop = () => ({
  type: backdropActionTypes.TOGGLE_BACKDROP_STATE,
});

export const toggleBackdropTwo = () => ({
  type: backdropActionTypes.TOGGLE_BACKDROP_TWO_STATE,
});
