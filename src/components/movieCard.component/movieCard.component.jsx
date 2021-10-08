import React, { useState } from "react";
import axios from "axios";
import "./movieCard.style.css";
// import { useEffect } from "react/cjs/react.development";
// import SideView from "../sideView.component/sideView.component";
import { Link } from "react-router-dom";
import { useRouteMatch, withRouter } from "react-router";
import { connect } from "react-redux";
import {
  toggleBackdrop,
  toggleBackdropTwo,
} from "../../redux/backdrop/backdrop.actions";
// import { openSideView } from "../../redux/sideView/sideView.action";

const MovieCard = ({
  poster,
  imdbId,
  history,
  match,
  height,
  width,
  imdbIdTwo,
  toggleBackdrop,
  toggleBackdropTwo,
  // openSideView,
  // movieDetailSideToggle
}) => {
  let { url, path } = useRouteMatch();
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
      {match.path === "/" ? (
        <button
          className="view__details"
          onClick={() => {
            history.push(`/${imdbId}`);
            toggleBackdrop();
          }}
        >
          View
        </button>
      ) : (
        <button
          className="view__details"
          onClick={() => {
            history.push(`${url}/${imdbIdTwo}`);
            toggleBackdropTwo();
          }}
        >
          View
        </button>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleBackdrop: () => dispatch(toggleBackdrop()),
  toggleBackdropTwo: () => dispatch(toggleBackdropTwo()),
});

export default withRouter(connect(null, mapDispatchToProps)(MovieCard));
