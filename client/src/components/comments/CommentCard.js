import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { MatchContext } from '../../context/MatchContext'


function CommentCard({com, matchObj}) {
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
              
        console.log(matchObj)
        console.log(matchObj.opinions)
               
        const matchWithOpinionRemoved = matchObj.opinions.filter( o => o.id !== id )
        console.log(matchWithOpinionRemoved)
        
        const updatedMatch = {...matchObj, opinions: matchWithOpinionRemoved}
        console.log(updatedMatch)
           patchMatch(updatedMatch)
        
        
        } 
           

         




    const displaybtns = currentUser.id === com.user_id ? (
        <>
        <button type="button" onClick={() => handleEdit(com.id, matchObj.id)} className="btn btn-primary  btn-sm">edit</button>
        &nbsp;
        <button type="button" onClick={() => handleDelete(com.id)} className="btn btn-secondary  btn-sm">delete</button>
        </>
    ):(null)

  return (
    <div className='border'>
        <p className="text-danger text-center"><span className='fw-bolder'>{com.username}</span> : {com.comment}</p>
        <div>
          {displaybtns}  
  </div>
        </div>
  )
}

export default CommentCard