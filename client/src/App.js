

import { useState } from "react";
import { ErrorProvider } from "./components/ErrorContext";
import Login from "./components/Login";
import { MatchProvider } from "./components/MatchContext";
import { Routes ,Route } from "react-router-dom";
import {  UserProvider } from "./components/UserContext";
import MatchPage from "./components/MatchPage";
import MatchForm from "./components/MatchForm";
import MatchDetails from "./components/MatchDetails";
import EditMatchForm from "./components/EditMatchForm";
import NavBar from "./components/NavBar";
import Errors from "./components/Errors";
// import { OpinionProvider } from "./components/OpinionContext";
import CommentForm from "./components/CommentForm";

function App() {


   const [authCheck, setAuthCheck] = useState(true)
  

 
  
 const routeJsx = authCheck ? ( <>...</> ) : (

                    <Routes>
                          <Route exact path="/match" element={<MatchPage authCheck={authCheck}  />} />
                          <Route exact path="/add_match" element={<MatchForm authCheck={authCheck} />} />
                          <Route exact path="/match/:id" element={<MatchDetails      />} />
                          <Route exact path="/edit_match" element={<EditMatchForm authCheck={authCheck}     />} />
                          <Route exact path="/login" element={<Login authCheck={authCheck}     />} />
                          <Route exact path="/edit_comment" element={<CommentForm authCheck={authCheck}     />} />
        
                            {/* <Route exact path="/profile" element={null} /> */}
        
                      </Routes>

 )
  
  return (
   
    <div>
      
     <ErrorProvider>
           <UserProvider setAuthCheck={ setAuthCheck }>
              <MatchProvider>
                {/* <OpinionProvider> */}
                 <NavBar />
                       <Errors/>
                               {routeJsx}
                        {/* </OpinionProvider> */}
                    </MatchProvider>
               </UserProvider>
          </ErrorProvider>
 
   </div>
    
  
  )
}

export default App;
