import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {

    state = {
        email: "",
        password: "",
        errors: {}
    };

    //records changes in component to form
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    //attempts to log user in
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="container">
                <div className="row m-3">
                    <div className="col-5 bg-secondary text-light">
                        {/* <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to
                            home
                        </Link> */}
                        <div className="col p-3">
                            <h4>
                                <b>Login</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Don't have an account? <Link to="/register" className="text-dark">Register</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button type="submit" className="btn btn-dark btn-large mb-3">
                                    Login
                                 </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;