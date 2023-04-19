import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorContext } from '../../context/ErrorContext'
import { MatchContext } from '../../context/MatchContext'
import { UserContext } from '../../context/UserContext'



const defaultData = {
    comment: "",
    match_id: "",
    user_id: ""
    }

function CommentForm({rendering}) {

    const [editedOpinion , setEditedOpinion] = useState(defaultData)

    const {setErrors,errors} = useContext(ErrorContext)
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
            if(!rendering && !loggedIn) {
              navigate('/login')
            }
            
            const match = matches.find(match => match.id === parseInt(match_id))
            const opinion = match.opinions.find(opinion => opinion.id === parseInt(id))
           
            if(!rendering && currentUser.id !== opinion.user_id) {
                navigate('/match')
              }
             
              setEditedOpinion({
                comment: opinion.comment,
                match_id: opinion.match_id,
                user_id: opinion.user_id
              })
            
          }, [matches, rendering, loggedIn, currentUser, id, match_id, navigate])

        function handleChange(event){
        
        setEditedOpinion({
          ...editedOpinion, [event.target.name]:event.target.value
         
        })
        
       }

     const goBack = () => {
      navigate(-1);
      setErrors([])
      }


    function handleSubmit (event ){
        event.preventDefault()
        setErrors([])
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
                     setErrors(errors.errors)
               })
           }
        })

    }

  return (
    <>
    <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example"/>
      &nbsp;
   <div className="container-flex row  bg-secondary-emphasis  justify-content-center"> 
    <div className="col-lg-8">
      <form action="/html/tags/html_form_tag_action.cfm" method="post" onSubmit={handleSubmit} >
         <textarea name="comment"  value={editedOpinion.comment} onChange={handleChange} style={{width:"96%",height:"90px",padding:"2%",font:"1.4em/1.6em cursive", backgroundcolor:"gold", color:"green"}}>
      
         </textarea>
        <div className='text-light fw-bold bg-warning'>{errors}</div>
           <button className="btn btn-primary" type="submit">submit</button>
             &nbsp;
           <button className="btn btn-primary" onClick={goBack} type="button">cancel</button>
         </form> 
       </div>
    </div>
    </>
  )
}

export default CommentForm