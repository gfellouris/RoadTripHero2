import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import GlobalContext from "../context/";
import Buttons from "../components/Buttons/Buttons";
import './signUp.css';

class SignUpBase extends Component {
  static contextType = GlobalContext;

  state = { email: "", password: "" };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  signUpUser = () => {
    this.props.firebase
      .createUser(this.state.email, this.state.password)
      .then(response => {
        // update global state with email
        console.log(response);
        this.context.setEmail(response.user.email);
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
        <div className="col-6" id="billboard">
          <div className="form-group">
            <img src="https://res.cloudinary.com/delacue/image/upload/v1567612455/BlueRTH2WHITE_gk3x3o.png" alt="Road Trip Hero logo"></img>
            <input
              className="form-control my-2"
              name="email"
              type="text"
              value={this.state.email}
              placeholder="E-mail"
              onChange={this.handleInputChange}
            />
            <input
              className="form-control my-2"
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />

            <Buttons
              btnStyle="success"
              btnName="Sign Up"
              isInvalid={isInvalid}
              onClickEvent={this.signUpUser}
            />

            <Buttons
              btnStyle="success"
              btnName="Sign in with Google"
              isInvalid={isInvalid}
              onClickEvent={this.signUpUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

const SignUp = withFirebase(SignUpBase);

export default SignUp;

/* <button
              disabled={isInvalid}
              className="btn btn-success"
              onClick={this.signUpUser}
            >
              Sign Up
            </button> */
