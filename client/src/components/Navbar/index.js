import React, { Component } from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <SideNav onSelect={selected => {}}>
        <SideNav.Toggle />
        <SideNav.Nav>
          <NavItem eventKey="Planner">
            <NavIcon><img src="https://res.cloudinary.com/delacue/image/upload/v1567997738/GoldRTHbadge_gr.png" alt="RTH badge" style={{ width: "40px", height: "auto" }}/></NavIcon>
            <NavText>
              <Link to="/">Road Trip Hero</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="results">
            <NavIcon>
              <i className="fas fa-road" style={{ fontSize: "30px" }} />
            </NavIcon>
            <NavText>
              <Link to="/planner">Trip Planner</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="Map">
            <NavIcon>
              <i
                className="fas fa-map-marked-alt"
                style={{ fontSize: "30px" }}
              />
            </NavIcon>
            <NavText>
              <Link to="/results">Map</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="Contact Us">
            <NavIcon>
              <i className="far fa-comments" style={{ fontSize: "30px" }} />
            </NavIcon>
            <NavText>
              <Link to="/">Contact Us</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="Logout">
            <NavIcon>
              <i className="fas fa-power-off" style={{ fontSize: "30px" }}/>
            </NavIcon>
            <NavText>
              <Link to="/">Log Out</Link>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}
export default Navbar;
