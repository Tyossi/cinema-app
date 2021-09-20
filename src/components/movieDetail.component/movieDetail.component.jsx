import React, { useState, useEffect } from "react";
import axios from "axios";
import "./movieDetail.styles.css";
import { connect } from "react-redux";
import MovieCard from "../movieCard.component/movieCard.component";
import { withRouter } from "react-router";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import SideView from "../sideView.component/sideView.component";

const MovieDetails = ({ match, movies }) => {
  const [movie, setMovie] = useState({ movie: {} });

  const url = `http://www.omdbapi.com/?i=${match.params.param}&plot=full&apikey=dc53bd4c`;

  const fetchMovie = async () => {
    const response = await axios(url);
    const data = response.data;
    console.log({ data });
    setMovie(data);
    console.log({ movie });
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  console.log(match);
  console.log({ movies });
  return (
    <div className="details">
      <Switch>
        {/* <Route path={`${match.path}/:param`} component={SideView} /> */}
      </Switch>
      <div className="movie__details">
        <img src={movie.Poster} alt="" className="poster" />

        <div className="movie__details--box">
          <h1 className="title">{movie.Title}</h1>
          <p className="plot">{movie.Plot}</p>
          <div className="figure__details--box">
            <p className="release__date icon">23 Apr 2021</p>
            <p className="rating icon">6.2</p>
            <p className="duration">1h 50mins</p>
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
          .filter((movie, index) => index < 4)
          .filter((movie) => movie.imdbID !== match.params.param)
          .map((movie) => {
            return (
              <MovieCard
                key={movie.index}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                imdbId={movie.imdbID}
                height="21rem"
                width="25rem"
              />
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, null)(withRouter(MovieDetails));
