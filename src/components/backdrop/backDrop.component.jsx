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
  fetchSideViewMovieStart,
  history,
  match,
  location,
  toggleBackdrop,
  sideViewState,
  toggleBackdropTwo,
}) => {
  console.log({ match, location, history });
  return (
    <>
      {match.path === "/:param" || match.path === "/" ? (
        <div
          className={"backdrop"}
          onClick={() => {
            history.push("/");
            toggleBackdrop();

            // fetchSideViewMovieStart();
          }}
        ></div>
      ) : (
        <div>
          <div
            className="backdrop"
            onClick={() => {
              history.goBack();

              toggleBackdropTwo();
              // fetchSideViewMovieStart();
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
