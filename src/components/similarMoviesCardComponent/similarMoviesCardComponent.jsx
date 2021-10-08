import React from "react";
import "./similarMoviesCardComponent.styles.css";
import { connect } from "react-redux";
import { fetchSideViewMovieStart } from "../../redux/sideView/sideView.action";
import { withRouter } from "react-router";

const SimilarMoviesCard = ({
  fetchSideViewMovieStart,
  history,
  match,
  poster,
  imdbId,
  height,
  width,
}) => {
  console.log({ match });
  return (
    <div
      className="movie__card"
      style={{
        backgroundImage: `url(${poster})`,
        height: `${height}`,
        width: `${width}`,
      }}
    >
      {/* <Link to={`${match.url}${imdbId}`}> */}
      <button
        className="view__details"
        onClick={() => {
          // history.push(`${match.url}${imdbId}/`);
          // movieDetailSideToggle();
        }}
      >
        View
      </button>
      {/* </Link> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchSideViewMovieStart: () => dispatch(fetchSideViewMovieStart()),
});

export default withRouter(connect(null, mapDispatchToProps)(SimilarMoviesCard));
