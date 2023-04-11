import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MatchContext } from './MatchContext'
import { UserContext } from './UserContext'

function CommentCard({com, matchArr}) {
    const {currentUser} = useContext(UserContext)
    const { patchMatch} = useContext(MatchContext)
    const navigate = useNavigate()

    

    function handleEdit(id , match_id) {
        console.log(id)
        console.log(com)
        console.log(match_id)
         navigate('/edit_comment',{state:{id:id,match_id:match_id}})
    }

    function handleDelete(id) {
        console.log(id)
        fetch(`/opinions/${id}`, {
            method: "DELETE"
        })
              
        console.log(matchArr)
        console.log(matchArr.opinions)
               
        const matchWithOpinionRemoved = matchArr.opinions.filter( o => o.id !== id )
        console.log(matchWithOpinionRemoved)
        
        const updatedMatch = {...matchArr, opinions: matchWithOpinionRemoved}
        console.log(updatedMatch)
           patchMatch(updatedMatch)
        
        
        } 
           

         




    const displaybtns = currentUser.id === com.user_id ? (
        <>
        <button type="button" onClick={() => handleEdit(com.id, matchArr.id)} class="btn btn-primary btn-sm">edit</button>
           <button type="button" onClick={() => handleDelete(com.id)} class="btn btn-secondary btn-sm">delete</button>
        </>
    ):(null)

  return (
    <div>
        <h4 className="text-warning text-center fw-bolder">{com.author} : {com.comment}</h4>
        <div>
          {displaybtns}  
  </div>
        </div>
  )
}

export default CommentCard