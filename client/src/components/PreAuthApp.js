import React from 'react'
import { Routes , Route} from "react-router-dom";
import Errors from './Errors';
import Login from './Login';


function PreAuthApp({setCurrentUser}) {
  return (
    <div>
       
       
       <Routes>
       <Route exact path="/" element={<Login setCurrentUser={setCurrentUser} />}/>
       </Routes>      
      <Errors/>

    </div>
  )
}

export default PreAuthApp