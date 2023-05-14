import { useState } from "react";
import { useDispatch } from "react-redux";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import { fetchMoviesAsynchronously } from "../../redux/movies/movies.actions";
import "./searchbar.style.css";

const SearchBar = ({ setSearch }) => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMoviesAsynchronously(query));
    setSearch(query);
    console.log("Dispatched!!!");
  };

  return (
    <div>
      <form className="search__con" onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          className="search__bar"
          // placeholder="&#xF002; Search Movies..."
        />

        <button type="submit" className="search__CTA">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
