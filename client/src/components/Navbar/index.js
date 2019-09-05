import React, { Component } from "react";
import MenuItem from './MenuItem.js';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
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
        <SideNav
        onSelect={(selected) => {
       
        }}
    >
        <SideNav.Toggle />
        <SideNav.Nav >
            <NavItem eventKey="Planner">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Road Trip Hero
                </NavText>
            </NavItem>
            <NavItem eventKey="results">
                <NavIcon>
                    <i className="fas fa-road" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                   Trip Planner
                </NavText>
                
            </NavItem>
            <NavItem eventKey="Map">
                <NavIcon>
                    <i className="fas fa-map-marked-alt" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Map
                </NavText>
            </NavItem>
            <NavItem eventKey="Contact Us">
                <NavIcon>
                    <i className="fas fa-map-marked-alt" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Contact Us
                </NavText>
            </NavItem>
            <NavItem eventKey="Logout">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Log Out
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
      
      )
    }
  }
 export default Navbar;
  