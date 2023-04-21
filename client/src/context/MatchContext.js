import { createContext, useEffect, useState } from "react";


const MatchContext = createContext([]);

const MatchProvider = ({children}) => {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        fetch("/matches")
        .then(resp => resp.json())
        .then(matchesData => {
          console.log(matchesData)
          setMatches(matchesData)
        
        })
        
    }, [])

    const destroyMatch = deletedMatch => {
        const updatedMatches = matches.filter(match => match.id !== deletedMatch.id)
        setMatches(updatedMatches)
      }

     const postMatch = addedMatch => {
        setMatches([...matches, addedMatch])
      }
  
      const patchMatch = newMatch => {
        const updatedMatches = matches.map(match => {
          if(newMatch.id === match.id) {
            return newMatch;
          } else {
            return match;
          }
        })
        setMatches(updatedMatches);
      }

     

      
      return <MatchContext.Provider value={{ matches, postMatch, patchMatch, destroyMatch }}>{ children }</MatchContext.Provider>
      
}
export {MatchContext,MatchProvider}
