import React from "react";
import MovieCard from "../movieCard.component/movieCard.component";
import "./movieList.style.css";

const MovieList = ({ movies, search }) => {
  return (
    <div>
      <h1 className="result">Results For: {search}</h1>;
      <div className="movie__card--container">
        {movies ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.released_date}
              poster={movie.poster_path}
              imdbId={movie.id}
            />
          ))
        ) : (
          <h1>No Movies</h1>
        )}
      </div>
    </div>
  );
};

export default MovieList;
