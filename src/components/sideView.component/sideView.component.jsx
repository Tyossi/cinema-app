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

const SideView = ({
  match,
  fetchSideViewMovieAsync,
  history,
  sideViewState,
  movie,
  closeSideView,
  imdbIdTwo,
  location,
  saveSideViewIdToState,
}) => {
  // const [movie, setMovie] = useState({ movie: {} });

  let isMounted = true;

  const { param, id } = useParams();

  // const url = `http://www.omdbapi.com/?i=${match.params.param}&apikey=dc53bd4c`;
  // const fetchMovie = async () => {
  //   const response = await axios(url);
  //   console.log({ response });
  // if (isMounted) setMovie(response.data);
  console.log({ movie });
  console.log({ param }, { id });
  // };
  useEffect(() => {
    fetchSideViewMovieAsync(match);
    // return () => {
    //   isMounted = false;
    // };
  }, []);

  console.log({ sideViewState });
  console.log({ match, history, location });

  return (
    <div className={"side__view"}>
      <FontAwesomeIcon
        className="font-awesome"
        icon={faArrowLeft}
        onClick={() => {
          history.push("/");
          // fetchSideViewMovieAsync();
        }}
      />
      <div
        className="side__movie--image"
        style={{
          backgroundImage: `url(${movie.Poster})`,
        }}
      ></div>
      <h3 className="side__vie--title">{movie.Title}</h3>
      <p className="side__vie--plot">{movie.Plot}</p>
      {id !== undefined ? (
        <div
          className="side__view--CTA"
          onClick={() => {
            history.push(`/movie-details/${id}`);
            saveSideViewIdToState(id);
            // closeSideView();
          }}
        >
          Watch Now
        </div>
      ) : (
        <div
          className="side__view--CTA"
          onClick={() => {
            history.push(`/movie-details/${movie.imdbID}`);
            saveSideViewIdToState(movie.imdbID);
          }}
        >
          Watch Now
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sideViewState: state.sideView.isSideViewOpen,
  movie: state.sideView.movie,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSideViewMovieAsync: (match) => dispatch(fetchSideViewMovieAsync(match)),
  closeSideView: () => dispatch(fetchSideViewMovieStart()),
  saveSideViewIdToState: (id) => dispatch(saveSideViewIdToState(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SideView)
);
