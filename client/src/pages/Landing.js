import React, { Component } from "react";
import SignUp from "../components/SignUp";
import GlobalContext from '../context'

class Landing extends Component {

static contextType = GlobalContext 
  state = {};

  render() {
    return (
      <div>
        <h1>Landing</h1>
        <h1>{this.context.email}</h1>
        <SignUp />
      </div>
    );
  }
}

export default Landing;
