import React, { useState } from "react";
import axios from "axios";
import "./movieCard.style.css";
// import { useEffect } from "react/cjs/react.development";
// import SideView from "../sideView.component/sideView.component";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { openSideView } from "../../redux/sideView/sideView.action";

const MovieCard = ({
  poster,
  imdbId,
  history,
  match,
  // openSideView,
  height,
  width,
}) => {
  // const [showSideView, setShowSideView] = useState(false);

  // const toggleSideView = () => {
  //   setShowSideView(!showSideView);
  //   console.log(showSideView);
  // };
  // const [viewId, setViewId] = useState("");
  // const [movie, setMovie] = useState({ movie: {} });

  // const url = `http://www.omdbapi.com/?i=${viewId}&apikey=dc53bd4c`;
  // const fetchMovie = async () => {
  //   const response = await axios(url);
  //   const data = response.data;
  //   console.log({ data });
  //   console.log({ movie });
  //   setMovie(data);
  // };

  // useEffect(() => {
  //   fetchMovie();
  //   console.log(imdbId);
  // }, [viewId]);
  console.log();

  return (
    <div
      className="movie__card"
      style={{
        backgroundImage: `url(${poster})`,
        height: `${height}`,
        width: `${width}`,
      }}
    >
      {/* <Link to={`${match.url}${imdbId}`}> */}
      <button
        className="view__details"
        onClick={() => {
          history.push(`${match.url}${imdbId}`);
          // openSideView();
        }}
      >
        View
      </button>
      {/* </Link> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // openSideView: () => dispatch(openSideView()),
});

export default connect(null, mapDispatchToProps)(withRouter(MovieCard));
