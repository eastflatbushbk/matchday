import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorContext } from './ErrorContext'
import { MatchContext } from './MatchContext'
// import { OpinionContext } from './OpinionContext'
import { UserContext } from './UserContext'



const defaultData = {
    comment: "",
    author: "",
    match_id: "",
    user_id: ""
    }

function CommentForm({authCheck}) {
    const [editedOpinion , setEditedOpinion] = useState(defaultData)
    const {setErrors} = useContext(ErrorContext)
    // const {opinions, patchOpinion} = useContext(OpinionContext)
    const {matches, patchMatch} = useContext(MatchContext)
    const {currentUser, loggedIn} = useContext(UserContext)

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)
     const id = location.state.id
     const match_id = location.state.match_id
        console.log(id)
        console.log(match_id)

        useEffect(() => {
            if(!authCheck && !loggedIn) {
              navigate('/login')
            }
            
            const match = matches.find(match => match.id === parseInt(match_id))
            const opinion = match.opinions.find(opinion => opinion.id === parseInt(id))
           
            if(!authCheck && currentUser.id !== opinion.user_id) {
                navigate('/match')
              }
             
              setEditedOpinion({
                comment: opinion.comment,
                author: opinion.author,
                match_id: opinion.match_id,
                user_id: opinion.user_id
              })
            
          }, [matches, authCheck, loggedIn, currentUser, id, match_id, navigate])

    function handleChange(event){
        
        setEditedOpinion({
          ...editedOpinion, [event.target.name]:event.target.value
         
        })
        
    }

    function handleSubmit (event ){
        event.preventDefault()
       console.log('comment form submited ')

        fetch(`/opinions/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(editedOpinion)
        })
        .then(resp => {
           if (resp.ok) {
                resp.json().then(modifiedOpinion => {
                    console.log(modifiedOpinion)
                    console.log(modifiedOpinion.match.id)
                   const copyOfMatches = [...matches]
                      console.log(matches)
                      console.log(copyOfMatches)
                 const matchToUpdate = copyOfMatches.find(match => match.id === modifiedOpinion.match.id)
                 console.log(matchToUpdate)
                  const opinionToUpdate = matchToUpdate.opinions.find( o => o.id === modifiedOpinion.id )

                  const idx = matchToUpdate.opinions.indexOf(opinionToUpdate)
                 console.log(idx)
                   delete modifiedOpinion.match ;
                   console.log(modifiedOpinion)
                 matchToUpdate.opinions.splice(idx, 1, modifiedOpinion)
                  console.log(matchToUpdate)
                    
                        patchMatch(matchToUpdate)
                   
                     setEditedOpinion(defaultData)
                     navigate(`/match/${match_id}`)
                })
           } else {
               resp.json().then(errors => {
                    console.log(errors)
                    setErrors(errors)
               })
           }
        })

    }

  return (
    <div>
         <form action="/html/tags/html_form_tag_action.cfm" method="post" onSubmit={handleSubmit} >
    <textarea name="comment"  value={editedOpinion.comment} onChange={handleChange} style={{width:"96%",height:"90px",padding:"2%",font:"1.4em/1.6em cursive", backgroundcolor:"gold", color:"green"}}>
      
      </textarea>
     <button class="btn btn-primary" type="submit">submit</button>
    </form> 
    </div>
  )
}

export default CommentForm