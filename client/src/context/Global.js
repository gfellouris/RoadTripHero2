import React, { Component } from 'react';
import GlobalContext from './index'

class Global extends Component {
    
    setEmail = email => {
        this.setState({ email: email})
    }

    setUser = user => {
        this.setState({
            user: {
                username: user.username,
                email: user.email,
                avatar: user.avatar, 
                uid: user.uid,
                id: user.id
            }
        })
    }
 
    render() { 
        return ( 
            <GlobalContext.Provider value={{user: this.state.user, setUser: this.setUser}}>
                {this.props.children}
            </GlobalContext.Provider>
         );
    }
}
 
export default Global;