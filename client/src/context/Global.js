import React, { Component } from 'react';
import GlobalContext from './index'

class Global extends Component {
    state = { email: '' }

    setEmail = email => {
        this.setState({ email: email})
    }

    render() { 
        return ( 
            <GlobalContext.Provider value={{email: this.state.email, setEmail: this.setEmail}}>
                {this.props.children}
            </GlobalContext.Provider>
         );
    }
}
 
export default Global;