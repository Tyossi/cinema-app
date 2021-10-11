import React from "react";
import "./searchbar.style.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const SearchBar = ({ onChange, onSubmit, query }) => {
  return (
    <div className="search__con">
      <input
        type="text"
        onChange={onChange}
        className="search__bar"
        placeholder="search movies..."
      />
      <i className="fa fa-search "></i>
      <button type="button" onClick={onSubmit} className="search__CTA">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
