

import { useState } from "react";
import { ErrorProvider } from "./components/ErrorContext";
import Login from "./components/Login";
import { MatchProvider } from "./components/MatchContext";
 import { Routes ,Route } from "react-router-dom";

//import PostAuthApp from './components/PostAuthApp';
//import PreAuthApp from './components/PreAuthApp';
import {  UserProvider } from "./components/UserContext";
import MatchPage from "./components/MatchPage";
import MatchForm from "./components/MatchForm";
import MatchDetails from "./components/MatchDetails";
import EditMatchForm from "./components/EditMatchForm";
import NavBar from "./components/NavBar";
import Errors from "./components/Errors";

function App() {


  // const [authCheck, setAuthCheck] = useState(false)
  // const [currentUser, setCurrentUser] = useState(null)
  // const {currentUser} = useContext(UserContext)
  const [loading, setLoading] = useState(true)
 
  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then(user => {
  //         console.log(user)
  //         setCurrentUser(user)
  //         setAuthCheck(true)})
  //     }
  //     else {
  //       setAuthCheck(true)
  //     }
  //   })
  // }, []);

  // useEffect(() => {
  //   fetch("/me")
  //   .then((response) => response.json())
  //       .then(user => {
  //         console.log(user)
  //         setCurrentUser(user)
          
  //       })
    
  // }, []);
  // if(!authCheck) { console.log("not checked") }
  
// const app = currentUser ? (
            
//                         <PostAuthApp  loading={ loading } currentUser = {currentUser}/>
                     
//                ) : (
//          <ErrorProvider>
//                 <UserProvider setLoading={ setLoading }>
//                      <PreAuthApp loading={ loading }  />
//                 </UserProvider>
//           </ErrorProvider>
//         )
 const routeJsx = loading ? ( <>...</> ) : (

                    <Routes>
                          <Route exact path="/match" element={<MatchPage loading={loading}  />} />
                          <Route exact path="/add_match" element={<MatchForm loading={loading} />} />
                          <Route exact path="/match/:id" element={<MatchDetails      />} />
                          <Route exact path="/edit_match" element={<EditMatchForm loading={loading}     />} />
                          <Route exact path="/login" element={<Login loading={loading}     />} />
        
                            {/* <Route exact path="/profile" element={null} /> */}
        
                      </Routes>

 )
  
  return (
   
    <div>
     <ErrorProvider>
           <UserProvider setLoading={ setLoading }>
              <MatchProvider>
                 <NavBar />
                    <Errors/>
                          {routeJsx}
                    </MatchProvider>
               </UserProvider>
          </ErrorProvider>
  
   </div>
    
  
  )
}

export default App;
