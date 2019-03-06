import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

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

    //     this.props.registerUser(newUser, this.props.history); 
    //   };

    render() {
        const { errors } = this.state;
        return (
            <div className="bg-dark text-light">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="text-light" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body bg-light text-dark">
                    <p className="grey-text">
                        Already have an account? <Link to="#">Log in</Link>
                    </p>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.name}
                                error={errors.name}
                                className="form-control"
                                id="name"
                                type="text"
                            />
                        </div>
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
                        <div className="form-group">
                            <label htmlFor="password2">Confirm Password</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                className="form-control"
                                id="password2"
                                type="password"
                            />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-primary btn-large">Sign up</button>
                        </div>
                    </form>
                </div>
                {/* <div className="">
                        <h4>
                            <b>Register</b> below
                            </h4>
                        <p className="grey-text text-darken-1">
                            Already have an account? <Link to="/login">Log in</Link>
                        </p>
                    </div> */}
                {/* <form noValidate onSubmit={this.onSubmit}>
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
                </form> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

// Register.propTypes = {
//     registerUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
// };

export default Register;