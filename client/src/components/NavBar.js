import React, { useContext } from 'react'
import {  useNavigate } from "react-router-dom";
import { UserContext } from './UserContext';


// const linkStyles = {
//     display: "centered",
//     width: "200px",
//     padding: "12px",
//     margin: "6px 6px 6px",
//     background: "lightblue",
//     textDecoration: "none",
//     color: "black",
//   };

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
  <nav class="navbar bg-primary navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand disabled" href="/match#">{currentUser.username}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active"  aria-current="page" href="/match">Home</a>
            <a class="nav-link" href="/add_match">Add match</a>
            <a class="nav-link" onClick={handleLogout} href="#">Log Out</a>
            
          </div>
        </div>
      </div>
    </nav>

) : (
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/login">Please enter credentials</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/login">login</a>
          
            
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