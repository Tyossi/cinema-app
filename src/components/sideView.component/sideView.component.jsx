import React, { useState, useEffect } from "react";
import "./sideView.component.style.css";
import axios from "axios";
import { withRouter, Link, useParams } from "react-router-dom";
import MovieCard from "../movieCard.component/movieCard.component";
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
  sideViewState,
  toggleBackdrop,
  toggleBackdropTwo,
  movie,
  closeSideView,
  imdbIdTwo,
  location,
  saveSideViewIdToState,
  backdropTwoState,
}) => {

  const { param, id } = useParams();

  // const url = `http://www.omdbapi.com/?i=${match.params.param}&apikey=dc53bd4c`;
  // const fetchMovie = async () => {
  //   const response = await axios(url);
  //   console.log({ response });
  // if (isMounted) setMovie(response.data);
  console.log({ movie });
  console.log({ param }, { id });
  console.log({ backdropTwoState });
  // };
  useEffect(() => {
    fetchSideViewMovieAsync(match);
    // return () => {
    //   isMounted = false;
    // };
  }, []);

  console.log({ sideViewState });
  console.log({ match, history, location });

  const toggleMDBackDrop = (backdropTwoState) => {
    return backdropTwoState ? toggleBackdropTwo() : null;
  };
  return (
    <div className={"side__view"}>
      {match.path === "/:param" ? (
        <FontAwesomeIcon
          className="font-awesome"
          icon={faArrowLeft}
          onClick={() => {
            history.goBack();
            toggleBackdrop();
            // fetchSideViewMovieAsync();
          }}
        />
      ) : (
        <FontAwesomeIcon
          className="font-awesome"
          icon={faArrowLeft}
          onClick={() => {
            history.goBack();
            toggleBackdropTwo();
            // fetchSideViewMovieAsync();
          }}
        />
      )}

      <div
        className="side__movie--image"
        // style={{
        //   backgroundImage: `url(${movie.Poster})`,
          
        // }}
      >
        <img src={movie.Poster} alt="" className="side-image"/>
      </div>
      <h3 className="side__vie--title">{movie.Title}</h3>
      <p className="side__vie--plot">{movie.Plot}</p>
      {id !== undefined ? (
        <div
          className="side__view--CTA"
          onClick={() => {
            history.push(`/movie-details/${id}`);
            toggleBackdropTwo();
            saveSideViewIdToState(id);
            // closeSideView();
          }}
        >
          Full Details
        </div>
      ) : (
        <div
          className="side__view--CTA"
          onClick={() => {
            history.push(`/movie-details/${movie.imdbID}`);

            // toggleBackdropTwo();

            toggleMDBackDrop(backdropTwoState);
            saveSideViewIdToState(movie.imdbID);
          }}
        >
          Full Details  
        </div>
      )}
    </div>
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
