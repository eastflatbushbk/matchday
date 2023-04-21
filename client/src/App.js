import { useState } from "react";
import { ErrorProvider } from "./context/ErrorContext";
import Login from "./components/authorization/Login";
import { MatchProvider } from "./context/MatchContext";
import { Routes ,Route } from "react-router-dom";
import {  UserProvider } from "./context/UserContext";
import EditMatchForm from "./components/matches/EditMatchForm";
import MatchForm from "./components/matches/MatchForm";
import MatchDetails from "./components/matches/MatchDetails"; 
import NavBar from "./components/NavBar";
import Signin from "./components/authorization/Signin";
import CommentForm from "./components/comments/CommentForm";
import MatchPage from "./components/matches/MatchPage";
import Home from "./components/Home";

function App() {

   const [rendering, setRendering] = useState(true)
  

 
  
 const routeJsx = rendering ? ( <>...</> ) : (

                    <Routes>
                          <Route exact path="/match" element={<MatchPage />} />
                          <Route exact path="/add_match" element={<MatchForm />} />
                          <Route exact path="/match/:id" element={<MatchDetails />} />
                          <Route exact path="/edit_match" element={<EditMatchForm rendering={rendering}     />} />
                          <Route exact path="/login" element={<Login />} />
                          <Route exact path="/signin" element={<Signin />} />
                          <Route exact path="/edit_comment" element={<CommentForm rendering={rendering}     />} />
                          <Route exact path="/" element={<Home />} />
                    </Routes>

 )
  
  return (
   
    <div>
       <ErrorProvider>
           <UserProvider setRendering={ setRendering }>
              <MatchProvider>
                 <NavBar />
                         {routeJsx}
                      </MatchProvider>
               </UserProvider>
          </ErrorProvider>
    </div>
    
  
  )
}

export default App;
