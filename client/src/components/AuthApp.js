import React from 'react'
import NavBar from './NavBar'
import { Routes , Route} from "react-router-dom";

function AuthApp() {
  return (
    <div>
    <NavBar />
    <Routes>
        <Route exact path="/match" element={null} />
        <Route exact path="/add_match" element={null} />
        <Route exact path="/my_comments" element={null} />
        <Route exact path="/profile" element={null} />
         <Route  path="/logout" element={null} />
   </Routes>
   </div>
  )
}

export default AuthApp