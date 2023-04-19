import React, {  useContext, useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
// import CommentCard from './CommentCard'

// import { ErrorContext } from '../context/ErrorContext';
// import { MatchContext } from '../context/MatchContext';
// import { OpinionContext } from './OpinionContext';
// import { UserContext } from '../context/UserContext';
import CommentCard from '../comments/CommentCard';
import { ErrorContext } from '../../context/ErrorContext';
import { MatchContext } from '../../context/MatchContext';
import { UserContext } from '../../context/UserContext';




function MatchDetails() {
    const  [formBtn, setFormBtn] = useState(false)
    const  [showForm , setShowForm] = useState(true)
     const [newComment , setNewComment] = useState("")
    const {matches , destroyMatch, patchMatch} = useContext(MatchContext)
    const {currentUser} = useContext(UserContext)
    // const {opinions, patchOpinion , destroyOpinion} = useContext(OpinionContext)
     const {setErrors, errors} = useContext(ErrorContext)


    
    const navigate = useNavigate();
   
     const matchId = parseInt(useParams().id)
        //  console.log(matchId)
        //  console.log(matches)

        //   console.log(matches)
      const matchObj = matches.find(a => a.id === matchId)
          console.log(matchObj)

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
            setErrors([])
            console.log('comment submitted')
           console.log(newComment.comment)
           console.log(currentUser.username)

           console.log(currentUser)
           console.log(currentUser.id)

            const createOpinion = {
                comment: newComment.comment,
                user_id: currentUser.id,
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
                    console.log(addedOpinion)
                      const newOpinions = [...matchObj.opinions, addedOpinion]
                      console.log(newOpinions)
                      const updatedMatch = {...matchObj, opinions: newOpinions}
                      console.log(updatedMatch)
                       patchMatch(updatedMatch)
                        setNewComment("")
                       // navigate('/match')
                  })
             } else {
                 resp.json().then(errors => {
                      setErrors(errors.errors)
                      console.log(errors)
                 })
             }
          })
           
        }
       

        function handleForm () {
          setShowForm(false)
          setNewComment("")
          setErrors([])
          setFormBtn(true)
        }
        function handleChat () {
          setShowForm(true)
          // setNewComment("")
          setFormBtn(false)
        }
      
      

      function handleEdit(id) {
        console.log(id)
         navigate('/edit_match',{state:{id:id}})
    }
    
 const content = matchObj.opinions.map( com => <CommentCard key={com.id} com={com} matchObj={matchObj} />) 

 const showBtn = formBtn ?(
  
  <button type="button" onClick={handleChat} className="btn btn-outline-secondary">💬</button>

 ):(null)


const displayForm = showForm ? (

   <>
   <form action="/html/tags/html_form_tag_action.cfm" method="post" onSubmit={handleCommentSubmit} >
      <textarea name="comment"  value={newComment.comment} onChange={handleChange} style={{width:"100%",height:"90px",padding:"2%",font:"1.4em/1.6em cursive", backgroundcolor:"gold", color:"green"}}>
        
        </textarea>
        <div className='text-light fw-bold bg-warning'>{errors}</div>
       <button className="btn btn-primary" type="submit">submit</button>
       &nbsp;
       <button className="btn btn-primary" onClick={handleForm}  type="button">cancel</button>
      </form> 
   </>

):(null)



 const displayButtons = currentUser.id === matchObj.user_id ? (
      <>
      <button type="button" onClick={() => handleEdit(matchObj.id)} className="btn btn-outline-secondary">edit match</button>
      &nbsp;
      <button type="button" onClick={() => deleteMatch(matchObj.id)} className="btn btn-outline-danger">delete match</button>
      &nbsp;
      </>
     ) :(null) 
 
//  const displayErrors =   <p style= {{color:"red"}}className="text-center">{errorMsg}</p>
  return (
    <div className="container-fluid bg-light py-5 border">
  <div className="row">
     <div className="col-md-2"></div>
         <h3 className="text-success col-md-3 text-start fw-bolder"> Game - {matchObj.game}</h3>
        <div className="col-md-2"></div>
           <h3 className="col-md-3 text-end"><span class="fs-6">posted by:</span>{matchObj.author.username}</h3>
   </div>

    <div className="row">
    <div className="col-md-2"></div>
      <div className="col-md-3">
        <div className="card bg-warning" style={{alignItems: 'center'}}>
          <img className="card-img-top" src={matchObj.hometeam_img_url} alt={matchObj.hometeam_img_url} style={{width:"20%",float:"left"}}/>
          <div className="card-block">
              <h4>{matchObj.home_team}</h4>  
              <h3 className=' text-center'>{matchObj.home_score}</h3> 
          </div>            
        </div>
      </div>
     
      <div className="col-md-2">
       <p style= {{color:"black", fontSize:"36px", marginTop:"35%"}}className="text-center">VS</p>
      
      </div>

      <div className="col-md-3">
        <div className="card bg-info" style={{alignItems: 'center'}}>
          
  
              
                      <img className="card-img-top" src={matchObj.awayteam_img_url} alt={matchObj.awayteam_img_url} style={{width:"20%"}}/>
                     <div className="card-block">
                      <h4>{matchObj.away_team}</h4> 
                        <h3 className=' text-center'>{matchObj.away_score}</h3>
                     </div>
               
           
                      
        </div>       
      <div>            
    </div>
  </div> 
  </div>

  <div className="row p-2">
    <div className="col-md-2"></div>
     <div className="col-md-3">
              { displayButtons }
              {showBtn}
             </div>
             </div>

     <div className="row p-2">
     <div className="col-md-2"></div>
     <div className="col-md-8">
      {displayForm}
      </div>
     </div> 

   <div className="row p-2">
   <div className="col-md-2"></div>
   <div className="col-md-8">
    <li>
        {content}
    </li>
    </div>
    </div>  
  </div>     
  )
}

export default MatchDetails




// onUpdatedCom={handleUpdate} onDeletedCom={handleDeletedCom}