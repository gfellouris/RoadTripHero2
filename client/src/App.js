<<<<<<< HEAD
import React, {Component} from 'react';
import './App.css';
import MessageForm from "./components/MessageForm";
import MapLeaf from "./components/MapLeaf.js";



class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <MapLeaf/>
      <MessageForm/>
      </>
     );
=======
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
>>>>>>> 47edfb5b4a919cbb93e7430c42ac8f29cbd227bc
  }
}
 


export default App;
