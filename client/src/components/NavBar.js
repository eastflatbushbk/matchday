import React from 'react'
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "centered",
    width: "200px",
    padding: "12px",
    margin: "6px 6px 6px",
    background: "lightblue",
    textDecoration: "none",
    color: "black",
  };

function NavBar() {
  return (
    <div><NavLink
    to="/teams"
    exact
    style={linkStyles}
    activeStyle={{
      background: "yellow",
    }}
  >
  Home
  </NavLink>
  <NavLink
    to="/add_team"
    exact
    style={linkStyles}
    activeStyle={{
      background: "yellow",
    }}
  >
  Add New Team
  </NavLink>
  <NavLink
    to="/about"
    exact
    style={linkStyles}
    activeStyle={{
      background: "yellow",
    }}
  >
  About
  </NavLink>
  </div>
  )
}

export default NavBar