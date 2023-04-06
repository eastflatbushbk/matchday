import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function CommentCard({com}) {
    const {currentUser} = useContext(UserContext)

    const displaybtns = currentUser.id === com.user_id ? (
        <>
        <button type="button" class="btn btn-primary btn-sm">edit</button>
           <button type="button" class="btn btn-secondary btn-sm">delete</button>
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