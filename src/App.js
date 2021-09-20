import "./App.css";
import Homepage from "./components/homepage/homepage.component";
import SideNav from "./components/sidenav/sidenav.component";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideView from "./components/sideView.component/sideView.component";
import Backdrop from "./components/backdrop/backDrop.component";
import { connect } from "react-redux";
import MovieDetails from "./components/movieDetail.component/movieDetail.component";

const App = ({ sideViewState, match }) => {
  // console.log({ sideViewState });

  return (
    <div className="App">
      <SideNav />
      <Route path="/" component={Homepage} />
      <Switch></Switch>
      <Route path="/movie-details/:param" component={MovieDetails} />
      <Route path={`${match.path}/:param`} component={SideView} />

      {/* <Backdrop /> */}
      {/* <SideView /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sideViewState: state.sideView.isSideViewOpen,
});
export default withRouter(connect(mapStateToProps)(App));
