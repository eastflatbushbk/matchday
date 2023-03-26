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
    to="/match"
    exact
    style={linkStyles}
    activeStyle={{
      background: "yellow",
    }}
  >
  Home
  </NavLink>
  <NavLink
    to="/add_match"
    exact
    style={linkStyles}
    activeStyle={{
      background: "yellow",
    }}
  >
  Add New Team
  </NavLink>
  <NavLink
    to="/my_comments"
    exact
    style={linkStyles}
    activeStyle={{
      background: "yellow",
    }}
  >
  About
  </NavLink>
  <NavLink
    to="/profile"
    exact
    style={linkStyles}
    activeStyle={{
      background: "yellow",
    }}
  >
  Profile
  </NavLink>
  <NavLink
    to="/logout"
    exact
    style={linkStyles}
    activeStyle={{
      background: "yellow",
    }}
  >
  logout
  </NavLink>
  </div>
  )
}

export default NavBar