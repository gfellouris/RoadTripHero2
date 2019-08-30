import React, { Component } from "react";
import { withFirebase } from "./Firebase";

class SignUpBase extends Component {
  state = { email: "", password: "" };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  signUpUser = () => {
    this.props.firebase
      .createUser(this.state.email, this.state.password)
      .then(authUser => {
        console.log(authUser)
        this.setState({ email: "", password: "" });
        // send them to another page with react router
        // this.props.history.push('/signin')
      })
      .catch(error => alert(error));
  };

  render() {
    const isInvalid = this.state.email === "" || this.state.password === "";

    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="form-group">
            <input
              className="form-control my-2"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <input
              className="form-control my-2"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <button
              disabled={isInvalid}
              className="btn btn-primary"
              onClick={this.signUpUser}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const SignUp = withFirebase(SignUpBase);

export default SignUp;
