import "./App.css";
import Homepage from "./components/homepage/homepage.component";
import SideNav from "./components/sidenav/sidenav.component";
import {Route} from "react-router-dom";
import SideView from "./components/sideView.component/sideView.component";
import Backdrop from "./components/backdrop/backDrop.component";
import { connect } from "react-redux";
import MovieDetails from "./components/movieDetail.component/movieDetail.component";


const App = ({ backdropState }) => {

  return (
    <div className="App">
      <SideNav />
      <Route path={[`/movie-details/:param/:id`]} component={SideView} />
      <Route path={`/movie-details/:param`} component={MovieDetails} />
      <Route exact path={[`/:param`]} render={() => <SideView key="22" />} />
      <Route path={"/"} render={() => <Homepage key="3" />} />
      {backdropState ? <Backdrop /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sideViewState: state.sideView.isSideViewOpen,
  backdropState: state.toggleBackdrop.backdropState,
});
export default connect(mapStateToProps)(App);
