import React from "react";
import "./backdrop.styles.css";
import { connect } from "react-redux";
import { fetchSideViewMovieStart } from "../../redux/sideView/sideView.action";
import { withRouter } from "react-router";
import {
  toggleBackdrop,
  toggleBackdropTwo,
} from "../../redux/backdrop/backdrop.actions";

const Backdrop = ({
  history,
  match,
  location,
  toggleBackdrop,
  toggleBackdropTwo,
}) => {
  return (
    <>
      {match.path === "/:param" || match.path === "/" ? (
        <div
          className={"backdrop"}
          onClick={() => {
            history.push("/");
            toggleBackdrop();
          }}
        ></div>
      ) : (
        <div>
          <div
            className="backdrop"
            onClick={() => {
              history.goBack();
              toggleBackdropTwo();
            }}
          ></div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  sideViewState: state.sideView.isSideViewOpen,
});
const mapDispatchToProps = (dispatch) => ({
  fetchSideViewMovieStart: () => dispatch(fetchSideViewMovieStart()),
  toggleBackdrop: () => dispatch(toggleBackdrop()),
  toggleBackdropTwo: () => dispatch(toggleBackdropTwo()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Backdrop)
);
