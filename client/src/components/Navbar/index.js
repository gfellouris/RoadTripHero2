import React, { Component } from "react";
import MenuItem from './MenuItem.js';
import './navbar.css';

class Navbar extends Component {
    state = {
        activeItem: '',
        activeItemPosition: 0,
        activeItemColor: '',
        menuItems: [
          { text: 'Trips' },
          { text: 'Map Results' },
          { text: 'Placeholder' },
          { text: 'Contact' },
          { text: 'Logout' },
        ]
    }
    
    handleClick = activeItem => {
      return e => {
        e.preventDefault()
      
        this.setState({
          activeItem,
          activeItemPosition: document.getElementById(activeItem).offsetTop,
          activeItemColor: window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'),
        })
      }
    }
    
    render() {
      const menuItems = this.state.menuItems.map(item => <MenuItem item={ item } handleClick={ this.handleClick }/>)
      return (
        <div className='menu-container'>
          <span className='menu-item--active' style={{ top: this.state.activeItemPosition, backgroundColor: this.state.activeItemColor }}/>
          { menuItems }
        </div>
      )
    }
  }

  export default Navbar;
 
  