import React, { useState, useEffect } from "react";
import SearchBar from "../searchBar/searchbar.component";
import "./homepage.style.css";
import MovieList from "../movieList/movieList.component";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchMoviesAsynchronously } from "../../redux/movies/movies.actions";

const Homepage = ({
  fetchMoviesAsynchronously,
  moviesReducerState,
}) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = () => {
    setSearch(query);
  };

  useEffect(() => {
    fetchMoviesAsynchronously(search);
  }, [search, fetchMoviesAsynchronously]);

  return (
    <>
      <div className="container">
        <h1 className="homepage__header">Explore</h1>
        <SearchBar onChange={onChange} onSubmit={onSubmit} query={query} />
        <MovieList movies={moviesReducerState} search={search} />
        {/* <Route
          path={`${match.path}/side-2/:param/`}
          render={() => <SideView />}
        /> */}
        {/* <Switch>
        <Route path={`${match.path}:param`} component={SideView} />
        </Switch> */}
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
