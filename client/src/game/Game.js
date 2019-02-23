import React, { Component } from "react";
//import "./game.css";

class Game extends Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "./logic/index.js";
        script.type = "module";
        script.async = true;
        document.getElementById("gameContainer").appendChild(script);
        
        // const gameElem = document.querySelector("#gameContainer");
        // console.log(gameElem);
        // gameElem.style.display = "block";
        //location.reload();
    }

    // componentWillUnmount() {
    //     const gameElem = document.getElementById("gameContainer");
    //     gameElem.style.display = "none";
    // }

    render() {
        return (
            <div id="gameContainer">
            </div>);
    }
}

export default Game;