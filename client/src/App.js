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
  }
}
 


export default App;
