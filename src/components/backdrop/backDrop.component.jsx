import React from "react";
import "./backdrop.styles.css";
import { connect } from "react-redux";
import { fetchSideViewMovieStart } from "../../redux/sideView/sideView.action";
import { withRouter } from "react-router";

const Backdrop = ({ fetchSideViewMovieStart, history, match }) => {
  return (
    <div
      className="backdrop"
      onClick={() => {
        history.push(`${match.url}`);
        fetchSideViewMovieStart();
      }}
    ></div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchSideViewMovieStart: () => dispatch(fetchSideViewMovieStart()),
});

export default connect(null, mapDispatchToProps)(withRouter(Backdrop));
