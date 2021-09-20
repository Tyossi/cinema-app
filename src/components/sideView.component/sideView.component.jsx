import React, { useState, useEffect } from "react";
import "./sideView.component.style.css";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import MovieCard from "../movieCard.component/movieCard.component";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { fetchSideViewMovieAsync } from "../../redux/sideView/sideView.action";

const SideView = ({
  match,
  fetchSideViewMovieAsync,
  history,
  sideViewState,
  movie,
}) => {
  // const [movie, setMovie] = useState({ movie: {} });

  let isMounted = true;

  // const url = `http://www.omdbapi.com/?i=${match.params.param}&apikey=dc53bd4c`;
  // const fetchMovie = async () => {
  //   const response = await axios(url);
  //   console.log({ response });
  // if (isMounted) setMovie(response.data);
  console.log({ movie });
  // };
  useEffect(() => {
    fetchSideViewMovieAsync(match);
    return () => {
      isMounted = false;
    };
  }, []);

  console.log({ sideViewState });
  console.log(match);

  return (
    <div className={sideViewState ? "side__view" : "hide"}>
      <FontAwesomeIcon
        className="font-awesome"
        icon={faArrowLeft}
        onClick={() => {
          history.push("/");
          fetchSideViewMovieAsync(fetchSideViewMovieAsync);
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

      <div
        className="side__view--CTA"
        onClick={() => {
          history.push(`/movie-details/${movie.imdbID}`);
        }}
      >
        Watch Now
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sideViewState: state.sideView.isSideViewOpen,
  movie: state.sideView.movie,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSideViewMovieAsync: (match) => dispatch(fetchSideViewMovieAsync(match)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SideView)
);
