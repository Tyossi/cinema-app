import { combineReducers } from "redux";
import sideViewReducer from "./sideView/sideView.reducer";
import moviesReducer from "./movies/movies.reducer";
import backdropReducer from "./backdrop/backdrop.reducer";

export default combineReducers({
  sideView: sideViewReducer,
  movies: moviesReducer,
  toggleBackdrop: backdropReducer,
});
