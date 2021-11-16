import React, { useState, useEffect } from "react";
import axios from "axios";
import "./movieDetail.styles.css";
import { connect } from "react-redux";
import MovieCard from "../movieCard.component/movieCard.component";
import { withRouter } from "react-router";
import BackDrop from "../backdrop/backDrop.component";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const MovieDetails = ({ match, movies, sideViewId, backDropTwoState }) => {
  const [movie, setMovie] = useState({});
  const movieId = sideViewId ? sideViewId : match.params.param;
  const apiKey = "d5265d163ef6f3964d8fe64245fac0f7";

  const url = `https://api.themoviedb.org/3/movie${movieId}?api_key=${apiKey}`;

  const fetchMovie = async () => {
    const response = await axios(url);
    const data = response.data;
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sideViewId]);

  console.log({ match });

  return (
    <div className="details">
      {backDropTwoState ? <BackDrop /> : null}
      <div className="movie__details">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="Movie Poster"
          className="poster"
        />

        <div className="movie__details--box">
          <h1 className="title">{movie.title}</h1>
          <p className="plot">{movie.overview}</p>
          <div className="figure__details--box">
            <p className="release__date icon">
              <i className="fa fa-calendar"></i> {movie.release_date}
            </p>
            <p className="rating icon">
              <i className="fa fa-star"></i> {movie.vote_average}
            </p>
            <p className="duration">
              <i className="fa fa-play-circle"></i> {movie.runtime}
            </p>
          </div>
          <div className="watch-and-fav__icons--box">
            <div className="watch-now__CTA">Watch Now</div>
            <p className="fav__icon"></p>
          </div>
        </div>
      </div>
      <h1 className="similar__heading">Similar Titles</h1>
      <div className="similar__movies--container">
        {movies
          ? movies
              .filter((movie, index) => index < 4)
              .filter((movie) => movie.id !== match.params.param)
              .map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    year={movie.release_date}
                    poster={movie.poster_path}
                    imdbIdTwo={movie.id}
                  />
                );
              })
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  sideViewState: state.sideView.isSideViewOpen,
  sideViewId: state.sideView.sideViewId,
  backDropTwoState: state.toggleBackdrop.backdropTwoState,
});

export default withRouter(connect(mapStateToProps)(MovieDetails));
