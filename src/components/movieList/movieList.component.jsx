import React from "react";
import MovieCard from "../movieCard.component/movieCard.component";
import "./movieList.style.css";

const MovieList = ({ movies, search }) => {
  return (
    <div>
      <h1>Result For: {search}</h1>
      <div className="movie__card--container">
        {movies ? (
          movies.map((movie) => {
            return (
              <div>
                <MovieCard
                  key={movie.index}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  imdbId={movie.imdbID}
                />
              </div>
            );
          })
        ) : (
          <h1>No Movies</h1>
        )}
      </div>
    </div>
  );
};

export default MovieList;
