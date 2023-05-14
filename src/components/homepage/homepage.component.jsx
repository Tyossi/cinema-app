import React, { useEffect, useState } from "react";
import SearchBar from "../searchBar/searchbar.component";
import MovieList from "../movieList/movieList.component";
import { useSelector, useDispatch } from "react-redux";
import "./homepage.style.css";
import { fetchMoviesAsynchronously } from "../../redux/movies/movies.actions";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const movieList = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsynchronously("star wars"));
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="homepage__header">Explore</h1>
      <SearchBar setSearch={setSearchTerm} />
      <MovieList movies={movieList} search={searchTerm} />
    </div>
  );
};

export default Homepage;
