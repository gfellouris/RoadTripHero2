import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import "./App.css";

class App extends Component {
  state = { email: 'whatever@aol.com' }

  // make function to update state here and pass down the functions and state value as props so
  // so that data is available everywhere in the app
  render() { 
    console.log(this.props)
    return ( 
      <Router>
        <Route exact path='/' component={Landing}/>
      </Router>
     );
  }
}
 
export default App;