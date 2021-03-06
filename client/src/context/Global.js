import React, { Component } from "react";
import GlobalContext from "./index";
import API from "../components/Utility/API";

class Global extends Component {
    state = {
      user: {
      name: "",
      email: "",
      photoUrl: "",
      uid: "",
      id: ""
    }
  };

  setEmail = email => {
    this.setState({ email: email });
  };

  setUser = user => {
   
    API.getUser(user).then(res => {
        console.log(res.data);
        console.log(user)
        const  resID  = res.data[0].id;
  
        this.setState({
          user: {
            name: user.name,
            email: user.email,
            photoUrl: user.photoUrl,
            uid: user.uid,
            id: resID
          }
        });
      });
    }



  render() {
    console.log(this.state.user.id)
    return (
      <GlobalContext.Provider
        value={{
          user: this.state.user,
          setUser: this.setUser
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  
  }
}
export default Global;
