import React, { Component } from "react";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./game.js";
    script.async = true;

    document.body.appendChild(script);
    
  }

  render() {
    return (
      <div>
        <Nav></Nav>
        I'M READY TO USE REACT! :-)
      </div>);
  }
}

export default App;
