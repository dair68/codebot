import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import Login from "../../auth/Login";
import Register from "../../auth/Register";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                <img id="logo" src="/assets/sprites/knight_icon.png" width="40" height="40" alt="knight-icon"/>
                Codebot
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item">
                            <Link className="nav-link" href="#">Tutorial</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                            </a>
                        </li> */}
                        <li className="nav-item active">
                            <NavLink id="registerModal" linkTitle="Register">
                                <Register></Register>
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink id="loginModal" linkTitle="Login">
                                <Login></Login>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;