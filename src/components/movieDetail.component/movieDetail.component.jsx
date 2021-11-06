import React, { useState, useEffect } from "react";
import axios from "axios";
import "./movieDetail.styles.css";
import { connect } from "react-redux";
import MovieCard from "../movieCard.component/movieCard.component";
import { withRouter } from "react-router";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import SideView from "../sideView.component/sideView.component";
import SimilarMovieCard from "../similarMoviesCardComponent/similarMoviesCardComponent";
import BackDrop from "../backdrop/backDrop.component";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";


const MovieDetails = ({
  match,
  movies,
  sideViewState,
  sideViewId,
  backDropTwoState,
}) => {
  const [movie, setMovie] = useState({ movie: {} });
  const movieId = sideViewId ? sideViewId : match.params.param;
  console.log({ sideViewId });
  const url = `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=${movieId}&plot=full&apikey=dc53bd4c`;

  const fetchMovie = async () => {
    const response = await axios(url);
    const data = response.data;
    console.log({ data });
    setMovie(data);
    console.log({ movie });
  };

  useEffect(() => {
    fetchMovie();
  }, [sideViewId]);

  console.log({ match });
  console.log({ movies });
  return (
    <div className="details">
      {/* <Switch> */}
      {/* <Route path={`${match.path}/:id/`} render={() => <SideView />} /> */}
      {/* <Route
        path={`/movie-details/:param/:id/`}
        render={() => <SideView match={match} />}
      /> */}
      {/* </Switch> */}

      {backDropTwoState ? <BackDrop /> : null}
      <div className="movie__details">
        <img src={movie.Poster} alt="" className="poster" />

        <div className="movie__details--box">
          <h1 className="title">{movie.Title}</h1>
          <p className="plot">{movie.Plot}</p>
          <div className="figure__details--box">
            <p className="release__date icon"><i class="fa fa-calendar"></i>  {movie.Released}</p>
            <p className="rating icon"><i class="fa fa-star"></i>  {movie.imdbRating}</p>
            {/* <p className="duration">1h 50mins</p> */}
            <p className="duration">

            <i class="fa fa-play-circle"></i>  {movie.Runtime}
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
          .filter((movie, index) => index < 4)
          .filter((movie) => movie.imdbID !== match.params.param)
          .map((movie) => {
            return (
              <div>
                {/* <SideView /> */}

                <MovieCard
                  key={movie.index}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  imdbIdTwo={movie.imdbID}
                  // height="30rem"
                  // width="auto"
                  // left="11rem"
                />
                {/* <SimilarMovieCard
                  key={movie.index}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  imdbId={movie.imdbID}
                  height="21rem"
                  width="25rem"
                /> */}
              </div>
            );
          })}
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

export default withRouter(
  connect(
    mapStateToProps
    // mapDispatchToProps
  )(MovieDetails)
);
