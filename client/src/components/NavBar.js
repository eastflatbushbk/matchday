import React, { useContext } from 'react'
import {  useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext';




function NavBar() {

 const {logoutUser, loggedIn} = useContext(UserContext)

 const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
        method: "DELETE"
    })
     navigate('/')
     logoutUser()
         
}

console.log(loggedIn)
const navigationLinks = loggedIn ? (
  
  <nav className="navbar fixed-top bg-primary navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand disabled" href="/match#" >MATCHDAY CHAT</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active"  aria-current="page" href="/match">Home</a>
            <a className="nav-link" href="/add_match">Add match</a>
            <a className="nav-link" onClick={handleLogout} href="#top">Log Out</a>
            </div>
        </div>
      </div>
    </nav>

) : (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/login">MATCHDAY CHAT</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/login">login</a>
            <a className="nav-link active" aria-current="page" href="/signin">signup</a>
           
          </div>
        </div>
      </div>
    </nav>

)



  return (
    <div>
     {navigationLinks} 
  </div>
  )
}

export default NavBar