import React, {  useContext, useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import CommentCard from './CommentCard'
// import { ErrorContext } from './ErrorContext';
import { ErrorContext } from './ErrorContext';
import { MatchContext } from './MatchContext';
import { UserContext } from './UserContext';


// const defaultObj = {
//         game: "",
//         home_team: "",
//         away_team: "",
//         home_score: "",
//         away_score: "",
//         hometeam_img_url: "",
//         awayteam_img_url: "",
//         opinions: [],
//         id: "",
//         user_id: ""

//      }

function MatchDetails() {
    // const [isLoaded, setIsLoaded] = useState(false);
    //   const [errorMsg, setErrorMsg] = useState([])
    // const [commentAdded , setCommentAdded] = useState(false)
    // const [commentEdited , setCommentEdited] = useState(false)
    // const [commentDeleted , setCommentDeleted] = useState(false)
     const [newComment , setNewComment] = useState("")
    const {matches , destroyMatch, patchMatch} = useContext(MatchContext)
    const {currentUser} = useContext(UserContext)
     const {setErrors} = useContext(ErrorContext)


    // const location = useLocation();
    // console.log(location.state)
    
    const navigate = useNavigate();
    //  const matchId = useParams().id
     const matchId = parseInt(useParams().id)
        //  console.log(matchId)
        //  console.log(matches)

        //   console.log(matches)
      const matchArr = matches.find(a => a.id === matchId)
        //   console.log(matchArr)

        // const  opinionatedMatch = [...matchArr.opinions, addedOpinions]
    //      setComments(matchArr.opinions)
    //      console.log(comments)

    // useEffect(() => {
    //     const id = location.state.id;
    //     console.log(id)
    //     // console.log(matchId)
    //     fetch(`/matches/${id}`)
    //     .then(resp => resp.json())
    //     .then(matchData => {
    //         console.log(matchData)
    //         setMatchObj(matchData)
            // setIsLoaded(!isLoaded)
            // setComments(matchData.opinions)
            // console.log(matchData.opinions)
            // setIsLoaded(!isLoaded)
            // checkIfUserCanEdit(tripData.users)
    //     })
    // },[commentAdded, commentEdited,commentDeleted])

    

    // function handleDelete(match_id){
    //     deleteMatch(match_id)
    // }

    function deleteMatch(matchId) {
        fetch(`/matches/${matchId}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())          
        .then((data) => destroyMatch(data)) 
         navigate('/match')
          }

          function handleChange(event){
        
            setNewComment({
              ...newComment, [event.target.name]:event.target.value
    
              
            })
            
        }
        
          function handleCommentSubmit(event) {
            event.preventDefault();
            console.log('comment submitted')
           console.log(newComment)
           console.log(currentUser.username)
           console.log(currentUser.user_id)

            const createOpinion = {
                author: currentUser.username,
                comment: newComment,
                user_id: currentUser.user_id,
                match_id: matchId
               }
                console.log(createOpinion)
            //    setNewMatch(createMatch)
               
            // postNewMatch(newMatch);
       
             fetch("/opinions", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
              },
              body: JSON.stringify(createOpinion)
          })
          .then(resp => {
             if (resp.ok) {
                  resp.json().then(addedOpinion => {
                       
                       patchMatch({...matchArr.opinions, addedOpinion})
                        setNewComment("")
                    //    navigate('/match')
                  })
             } else {
                 resp.json().then(errors => {
                      setErrors(errors.error)
                 })
             }
          })
           
        }
       
      
      

      function handleEdit(id) {
        console.log(id)
         navigate('/edit_match',{state:{id:id}})
    }
    
 const content = matchArr.opinions.map( com => <CommentCard key={com.id} com={com} />) 

 const displayButtons = currentUser.id === matchArr.user_id ? (<>
      <button type="button" onClick={() => handleEdit(matchArr.id)} class="btn btn-outline-secondary">edit match</button> 
      <button type="button" class="btn btn-outline-danger"onClick={() => deleteMatch(matchArr.id)}>delete match</button>
      </>
     ) :(null) 
 
//  const displayErrors =   <p style= {{color:"red"}}className="text-center">{errorMsg}</p>
  return (
    <div className="container-fluid bg-dark py-5">
    <h1 className="text-success text-center fw-bolder"> Game - {matchArr.game}</h1>
    <h3 className="text-warning text-center fw-bolder">{matchArr.home_team} VS {matchArr.away_team}</h3>
    <div className="row">
      <div className="col-lg-5">
        <div className="card bg-warning">
          <img className="card-img-top" src={matchArr.hometeam_img_url} alt={matchArr.hometeam_img_url} style={{width:"20%",float:"left"}}/>
          <div className="card-block">
              <h4>{matchArr.home_team}</h4>  
              <h3>{matchArr.home_score}</h3> 
          </div>            
        </div>
      </div>
     
      <div className="col-lg-2">
       <p style= {{color:"yellow", fontSize:"36px", marginTop:"35%"}}className="text-center">VS</p>
       { displayButtons }
      </div>
      <div className="col-lg-5">
        <div className="card bg-info">
          <div class="row">
  
              <div class="col-lg-4 offset-lg-8">
                      <img className="card-img-top" src={matchArr.awayteam_img_url} alt={matchArr.awayteam_img_url} style={{width:"65%"}}/>
                     <div className="card-block">
                      <h4>{matchArr.away_team}</h4> 
                        <h3>{matchArr.away_score}</h3>
                     </div>
               </div>
           
          </div>            
        </div>       
      <div>            
    </div>
  </div> 
  </div>
   
  <form action="/html/tags/html_form_tag_action.cfm" method="post" onSubmit={handleCommentSubmit} >
<textarea name="comment"  value={newComment.comment} onChange={handleChange} style={{width:"96%",height:"90px",padding:"2%",font:"1.4em/1.6em cursive", backgroundcolor:"gold", color:"green"}}>
Hey... say something!
</textarea>
<button class="btn btn-primary" type="submit">submit</button>
</form> 
   <div>
    <li>
        {content}
    </li>
    </div>  
  </div>     
  )
}

export default MatchDetails




// onUpdatedCom={handleUpdate} onDeletedCom={handleDeletedCom}