import React, { useEffect } from "react";
import "./sideView.component.style.css";
import { withRouter, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  fetchSideViewMovieAsync,
  saveSideViewIdToState,
} from "../../redux/sideView/sideView.action";
import { fetchSideViewMovieStart } from "../../redux/sideView/sideView.action";
import {
  toggleBackdrop,
  toggleBackdropTwo,
} from "../../redux/backdrop/backdrop.actions";

const SideView = ({
  match,
  fetchSideViewMovieAsync,
  history,
  toggleBackdrop,
  toggleBackdropTwo,
  movie,
  saveSideViewIdToState,
  backdropTwoState,
}) => {
  const { id } = useParams();

  useEffect(() => {
    fetchSideViewMovieAsync(match);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMDBackDrop = (backdropTwoState) => {
    return backdropTwoState ? toggleBackdropTwo() : null;
  };

  return (
    <>
      {movie ? (
        <div className="side__view">
          <>
            {match.path === "/:param" ? (
              <FontAwesomeIcon
                className="font-awesome"
                icon={faArrowLeft}
                onClick={() => {
                  history.goBack();
                  toggleBackdrop();
                }}
              />
            ) : (
              <FontAwesomeIcon
                className="font-awesome"
                icon={faArrowLeft}
                onClick={() => {
                  history.goBack();
                  toggleBackdropTwo();
                }}
              />
            )}

            <div className="side__movie--image">
              <img
                src={movie.Poster}
                alt="Movie Poster"
                className="side-image"
              />
            </div>
            <h3 className="side__view--title">{movie.Title}</h3>
            <p className="side__view--plot">{movie.Plot}</p>
            {id !== undefined ? (
              <div
                className="side__view--CTA"
                onClick={() => {
                  history.push(`/movie-details/${id}`);
                  toggleBackdropTwo();
                  saveSideViewIdToState(id);
                }}
              >
                Full Details
              </div>
            ) : (
              <div
                className="side__view--CTA"
                onClick={() => {
                  history.push(`/movie-details/${movie.imdbID}`);
                  toggleMDBackDrop(backdropTwoState);
                  saveSideViewIdToState(movie.imdbID);
                }}
              >
                Full Details
              </div>
            )}
          </>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  sideViewState: state.sideView.isSideViewOpen,
  movie: state.sideView.movie,
  backdropTwoState: state.toggleBackdrop.backdropTwoState,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSideViewMovieAsync: (match) => dispatch(fetchSideViewMovieAsync(match)),
  closeSideView: () => dispatch(fetchSideViewMovieStart()),
  saveSideViewIdToState: (id) => dispatch(saveSideViewIdToState(id)),
  toggleBackdrop: () => dispatch(toggleBackdrop()),
  toggleBackdropTwo: () => dispatch(toggleBackdropTwo()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SideView)
);
