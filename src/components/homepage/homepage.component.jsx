import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../searchBar/searchbar.component";
import "./homepage.style.css";
import MovieList from "../movieList/movieList.component";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchMoviesAsynchronously } from "../../redux/movies/movies.actions";
import Loading from "../Loading/Loading.component";

const Homepage = ({ fetchMoviesAsynchronously, moviesReducerState }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("spider man");
  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = () => {
    setSearch(query);
    formRef.current.reset();
    setLoading(true);
  };

  useEffect(() => {
    fetchMoviesAsynchronously(search);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [search, fetchMoviesAsynchronously]);

  return (
    <>
      <div className="container">
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <>
            <h1 className="homepage__header">Explore</h1>
            <SearchBar
              onChange={onChange}
              onSubmit={onSubmit}
              query={query}
              formRef={formRef}
            />

            <MovieList movies={moviesReducerState} search={search} />
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  sideViewState: state.sideView.isSideViewOpen,
  moviesReducerState: state.movies.movies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesAsynchronously: (search) =>
    dispatch(fetchMoviesAsynchronously(search)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Homepage)
);
