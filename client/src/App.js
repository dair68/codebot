import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Game from "./game/Game";
import Register from "./auth/Register";
import Login from "./auth/Login";
// import Modal from "./modals";

//import { Provider } from "react-redux";
//import store from "./store";

class App extends Component {
  state = {
    currentModal: "SIGN_IN"
  }

  render() {
    return (
     // <Provider store={store}>
     <div>
        <Router>
          <div>
            <Nav></Nav>
            <Route exact path="/" component={Game} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Footer></Footer>
          </div>
        </Router>
        {/* <Modal currentModal={this.state.currentModal}></Modal> */}
     </div>
     // </Provider>
    )
  }
}

export default App;
