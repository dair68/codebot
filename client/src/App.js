import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Game from "./game/Game";
import Register from "./auth/Register";
import Login from "./auth/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <Route exact path="/" component={Game} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Footer></Footer>
        </div>
      </Router>
    )
  }
}

export default App;
