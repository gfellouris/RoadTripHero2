import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Global from "./context/Global";
import Landing from "./pages/Landing";
import "./App.css";

class App extends Component {
  state = { };

  // make function to update state here and pass down the functions and state value as props so
  // so that data is available everywhere in the app
  render() {
    console.log(this.props);
    return (
      <Global>
        <Router>
          <Route exact path="/" component={Landing} />
        </Router>
      </Global>
    );
  }
}
 


export default App;
