import React from "react";
import "./searchbar.style.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const SearchBar = ({ onChange, onSubmit, formRef}) => {
  return (
    <div >
      <form ref={formRef} className="search__con">

      <input
        type="text"
        onChange={onChange}
        className="search__bar"
        placeholder="&#xF002; Search Movies..."
      />

      <div type="button" onClick={onSubmit} className="search__CTA">
        Search
      </div>
      </form>
    </div>
  );
};

export default SearchBar;
