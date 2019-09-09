import React, { Component } from "react";
import SignUp from "../components/UserAccount/SignUp";
// import SignInWithGoogle from '../components/UserAccount/SignInWithGoogle' 
import GlobalContext from '../context';
import './landing.css';

class Landing extends Component {

static contextType = GlobalContext
  state = {};

  render() {
    return (
    
     <>
         <video id="background-video" className="videoTag" loop autoPlay muted>
                <source src="https://res.cloudinary.com/delacue/video/upload/v1567551824/RTvideoLapse_p06h1g.mp4" type="video/mp4" />
               
                
            </video>
        
        
        <h1>{this.context.email}</h1>

        <SignUp/>

        {/* <SignInWithGoogle /> */}
       </>
    );
  }
}

export default Landing;
