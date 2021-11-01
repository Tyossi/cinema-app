import React from "react";
import "./sidenav.component.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const SideNav = () => {
  return (
    <div className="side__nav-container">
      <h1 className="title">ShowFlix</h1>
      <div className="search__icon--con">
        {/* <FontAwesomeIcon className="font-awesome search" icon={faSearch} /> */}
        <h2 className="search__label">
          <i className="fa fa-search "></i>Search
        </h2>
      </div>
      <div className="watchlist-con">
        <h1 className="watchlist__lable">
          <i class="fa fa-heart"></i>Watchlist
        </h1>
        {/* <p className="watchlist"></p> */}
      </div>
    </div>
  );
};

export default SideNav;
