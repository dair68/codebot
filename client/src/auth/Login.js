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
            <div>
                <div class="modal-header bg-dark text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="text-light" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body bg-light text-dark">
                      <p className="grey-text text-darken-1">
                                Don't have an account? <Link to="#" className="text-dark">Register</Link>
                      </p>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                className="form-control"
                                id="email"
                                type="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                className="form-control"
                                id="password"
                                type="password"
                            />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-dark btn-large mb-3">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;