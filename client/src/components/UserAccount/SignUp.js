import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import GlobalContext from "../../context";
import Buttons from "../Buttons/Buttons";
import { Col, Row, Container } from "../Grid/index.js";
import "./signUp.css";
import {Animated} from "react-animated-css";
import SignInWithGoogle from "./SignInWithGoogle"


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

      
     
      <Animated animationIn="bounceInLeft" animationInDelay={1000} animationOut="fadeOut" isVisible={true}>
      <Container fluid>
        <Row >
          <Col size="md-6" >
            <div className="form-group" id="billboard">
              <img
                src="https://res.cloudinary.com/delacue/image/upload/v1567612455/BlueRTH2WHITE_gk3x3o.png"
                alt="Road Trip Hero logo"
              ></img>
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

              {/* <Buttons
                btnStyle="success"
                btnName="Sign Up"
                isInvalid={isInvalid}
                onClickEvent={this.signUpUser}
              /> */}
              
              <SignInWithGoogle/>
              {/* <Buttons  btnStyle="success"
                btnName="Sign in with Google"
                isInvalid={isInvalid}
                onClickEvent={this.signUpUser}
              />   */}
            </div>
          </Col>
        </Row>
      </Container>
      </Animated>
     
    );
  }
}

const SignUp = withFirebase(SignUpBase);

export default SignUp;


