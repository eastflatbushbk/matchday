import React, { useContext } from 'react'
import {  NavLink, useNavigate } from "react-router-dom";
import { UserContext } from './UserContext';


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

 const {logoutUser, loggedIn, currentUser} = useContext(UserContext)
 const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
          logoutUser()
            navigate('/')
          }
    })
}

const navigationLinks = loggedIn ? (
  <> 
  <div >
  {currentUser.username}
  </div>
<NavLink
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
    onClick={handleLogout}
    style={linkStyles}
    activeStyle={{
      background: "red",
    }}
  >
  Logout
  </NavLink>
  
  {/* <button type="button" style='float: right' onClick={handleLogout}>Logout</button> */}
 
</>

) : (
  <>
  <NavLink
    to="/login"
    exact
    style={linkStyles}
    activeStyle={{
      background: "yellow",
    }}
  >
  login
  </NavLink>
</>

)



  return (
    <div>
     {navigationLinks} 
  </div>
  )
}

export default NavBar