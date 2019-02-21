import React, { Component } from "react";

class Game extends Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "./logic/game.js";
        script.async = true;

        document.getElementById("gameContainer").appendChild(script);
    }

    render() {
        return (
            <div id="gameContainer">
            </div>);
    }
}

export default Game;