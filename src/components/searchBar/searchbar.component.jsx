import React from "react";
import "./searchbar.style.css";

const SearchBar = ({ onChange, onSubmit, query }) => {
  return (
    <div className="">
      <input type="text" onChange={onChange} />
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
