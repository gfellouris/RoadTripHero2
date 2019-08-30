import React, { Component } from "react";
import SignUp from "../components/SignUp";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Landing</h1>
        <SignUp />
      </div>
    );
  }
}

export default Landing;
