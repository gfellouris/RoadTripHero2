import React, { Component } from "react";
import API from '../Utility/API';

class UserDbInfo  extends Component {
    state ={
        userDbInfo: []
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        API.getUser()
        .then(res => this.setState({userDbInfo: res.data}))
        .catch(err => console.log(err));
    };


}