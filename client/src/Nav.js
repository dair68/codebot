import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Codebot</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" href="#">Tutorial</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                            </a>
                        </li> */}
                        <li className="nav-item active">
                            <Link className="nav-link" to="/register" target="_blank"> Register</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/login" target="_blank"> Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;