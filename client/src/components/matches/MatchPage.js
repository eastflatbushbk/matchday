import React, { useContext } from 'react'
// import MatchCard from './MatchCard'
// import { MatchContext } from '../context/MatchContext'
import MatchCard from './MatchCard'
import { MatchContext } from '../../context/MatchContext'

function MatchPage() {
    const {matches} = useContext(MatchContext)
    console.log(matches)
    const matchList = matches.map( m => <MatchCard key={m.id} match={m}  />)
  return (
    <div>
       <ul>
          {matchList}
        </ul>
    </div>
    
  )
}

export default MatchPage