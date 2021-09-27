import React from "react";
import { connect } from "react-redux";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./app.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Genres from "./pages/genre";
import ViewCoubs from "./pages/view";
import About from "./pages/about";
import Contacts from "./pages/contacts";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>

          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/genre/:id/:slug" component={Genres} />
            <Route path="/view/:id_genre/:slug" component={ViewCoubs} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
          </Switch>

          <Footer />

        </Router>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (props) => props;

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAsyncPostsHandler: (count) => {
//       dispatch(getAsyncPosts(count));
//     }
//   };
// };

export default connect(mapStateToProps, null)(App);
