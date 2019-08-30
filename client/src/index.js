<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Firebase, { FirebaseContext } from "./components/Firebase/";
>>>>>>> 47edfb5b4a919cbb93e7430c42ac8f29cbd227bc

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
