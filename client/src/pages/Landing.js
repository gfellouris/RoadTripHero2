import React, { Component } from "react";
import SignUp from "../components/SignUp";
import GlobalContext from '../context';
import Buttons from '../components/Buttons/Buttons'

class Landing extends Component {

static contextType = GlobalContext 
  state = {btnStyle: "success", btnName:""};

  render() {
    return (
      <div>
        <h1>oad Trip Hero</h1>
        <Buttons
        btnStyle={this.state.btnStyle}
        btnName="Sign in using Google"/>
         <Buttons
        btnStyle={this.state.btnStyle}
        btnName="Sign Up"/>
        <h1>{this.context.email}</h1>
        <SignUp />
      </div>
    );
  }
}

export default Landing;
