import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Game from "./Game";

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Game></Game>
        <Footer></Footer>
      </div>);
  }
}

export default App;
