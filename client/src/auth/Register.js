import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
    };

    //adds stuff inputed in the form to state object
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    //attempts to register new user
    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5 bg-dark text-light p-3 m-3">
                        {/* <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to
                            home
                        </Link> */}
                        <div className="col s12">
                            <h4>
                                <b>Register</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Already have an account? <Link to="/login">Log in</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                />
                                <label htmlFor="name">Name</label>
                            </div>
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
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                />
                                <label htmlFor="password2">Confirm Password</label>
                            </div>
                            <div className="col s12">
                                <button type="submit" className="btn btn-large btn-light">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;