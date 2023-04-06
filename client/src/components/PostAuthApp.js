// import React, {  useState } from 'react'
import NavBar from './NavBar'
import { Routes , Route} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import MatchPage from './MatchPage';
import MatchForm from './MatchForm';
import MatchDetails from './MatchDetails';
// import { MatchProvider } from './MatchContext';
import EditMatchForm from './EditMatchForm';
import Errors from './Errors';

function PostAuthApp({ currentUser, loading }) {
  // const [isNewMatch, setIsNewMatch] = useState(false)
    // const [isDeleted, setIsDeleted] = useState(false)
  // const [matches, setMatches] = useState([])
  // const [errorMsg, setErrorMsg] = useState([])
  

//   useEffect(() => {
//     fetch("/matches")
//     .then(resp => resp.json())
//     .then(matchesData => {
//       console.log(matchesData)
//       setMatches(matchesData)})
    
// }, [isNewMatch, isDeleted])

 
// function postNewMatch(newMatch) {
//     console.log(newMatch)
//   fetch("/matches", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//       },
//       body: JSON.stringify(newMatch)
//   })
//   .then(resp => {
//      if (resp.ok) {
//           resp.json().then(addedMatch => {
//               // setMatches([...matches, addedMatch])
//               setIsNewMatch(!isNewMatch)
//               setErrorMsg([])
//           })
//      } else {
//          resp.json().then(errors => {
//              setErrorMsg(errors.errors)
//          })
//      }
//   })
// }

// function deleteMatch(deleteId) {
//   fetch(`/matches/${deleteId}`, {
//       method: "DELETE"
//   })
//   .then(resp => {
//     if (resp.ok) {
//          resp.json().then(() => {
//            setIsDeleted(!isDeleted)
//            setErrorMsg([])
//           })
//     } else {
//         resp.json().then(errors => {
//             setErrorMsg(errors.errors)
//         })
//     }
//  })
  
// }

// const handleDeleteMatch = (id) => {
//   const deletedMatch = matches.filter(match => match.id !== id);
//   setMatches(deletedMatch);
//   setIsDeleted(!isDeleted)
//   setErrorMsg([])
// }
 
// const handleErrors = (error) => {
//   setErrorMsg(error)
// }


  return (
    <div>
    
    <NavBar />
    <Errors/>
    <Routes>
        <Route exact path="/match" element={<MatchPage loading={loading}  />} />
        <Route exact path="/add_match" element={<MatchForm  currentUser={currentUser}/>} />
        <Route exact path="/match/:id" element={<MatchDetails    currentUser={currentUser}  />} />
        <Route exact path="/edit_match" element={<EditMatchForm    currentUser={currentUser}  />} />
        
        {/* <Route exact path="/profile" element={null} /> */}
        
   </Routes>
  
   </div>
  )
}

export default PostAuthApp




// function deleteMatch(deleteId) {
//   fetch(`/matches/${deleteId}`, {
//       method: "DELETE"
//   })
//   .then(() => setIsDeleted(!isDeleted))
// }