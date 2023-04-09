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
     navigate('/login')
     logoutUser()
    
               
}

console.log(loggedIn)
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
  Add New Match
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
  please enter credentials
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