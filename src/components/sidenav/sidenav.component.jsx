import React from "react";
import "./sidenav.component.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const SideNav = () => {
  return (
    <div className="side__nav-container">
      <h1 className="app__name">SilverScreen</h1>
      <div className="search__icon--con">
        <h2 className="search__label">
          <i className="fa fa-search "></i>Search
        </h2>
      </div>
      <div className="watchlist-con">
        <h1 className="watchlist__lable">
          <i className="fa fa-heart"></i>Watchlist
        </h1>
      </div>
    </div>
  );
};

export default SideNav;
