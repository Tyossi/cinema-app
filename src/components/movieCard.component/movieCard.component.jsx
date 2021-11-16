import React from "react";
import "./movieCard.style.css";
import { useRouteMatch, withRouter } from "react-router";
import { connect } from "react-redux";
import {
  toggleBackdrop,
  toggleBackdropTwo,
} from "../../redux/backdrop/backdrop.actions";

const MovieCard = ({
  poster,
  imdbId,
  history,
  match,
  height,
  width,
  left,
  imdbIdTwo,
  toggleBackdrop,
  toggleBackdropTwo,
}) => {
  let { url } = useRouteMatch();

  return (
    <div
      className="movie__card"
      style={{
        height: `${height}`,
        width: `${width}`,
      }}
    >
      <img
        src={"https://image.tmdb.org/t/p/w500/" + poster}
        alt="Movie Poster"
        className="movie__poster"
      />

      {match.path === "/" ? (
        <div
          className="view__CTA"
          onClick={() => {
            history.push(`/${imdbId}`);
            toggleBackdrop();
          }}
        >
          View
        </div>
      ) : (
        <div
          className="view__CTA"
          style={{ left: `${left}` }}
          onClick={() => {
            history.push(`${url}/${imdbIdTwo}`);
            toggleBackdropTwo();
          }}
        >
          View
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleBackdrop: () => dispatch(toggleBackdrop()),
  toggleBackdropTwo: () => dispatch(toggleBackdropTwo()),
});

export default withRouter(connect(null, mapDispatchToProps)(MovieCard));
