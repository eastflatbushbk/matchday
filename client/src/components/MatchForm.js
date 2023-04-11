import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
  import { ErrorContext } from './ErrorContext';
import { MatchContext } from './MatchContext';
import { UserContext } from './UserContext';


const defaultData = {
    game: "",
    home_team: "",
    away_team: "",
    home_score: "",
    away_score: "",
    hometeam_img_url: "",
    awayteam_img_url: ""
    }

function MatchForm({authCheck}) {

    const [ newMatch, setNewMatch ] = useState(defaultData)
    const {postMatch} = useContext(MatchContext)
    const {loggedIn} = useContext(UserContext)
     const { setErrors} = useContext(ErrorContext)
   // const [errorMsg, setErrorMsg] = useState([])
    const navigate = useNavigate()


    useEffect(() => {

    if(!authCheck && !loggedIn) {
        navigate('/login')
      }
       return () => {
       
        setErrors([])
      }
    }, [authCheck, loggedIn, navigate, setErrors])


    function handleChange(event){
        
        setNewMatch({
          ...newMatch, [event.target.name]:event.target.value

          
        })
        
    }

  function handleSubmit(event) {
        event.preventDefault();
        // const createMatch = {
        //     game: newMatch.game,
        //     home_team: newMatch.home_team,
        //     away_team: newMatch.away_team,
        //     home_score: newMatch.home_score,
        //     away_score: newMatch.away_score,
        //     hometeam_img_url: newMatch.hometeam_img_url,
        //     awayteam_img_url: newMatch.awayteam_img_url
        //    }
        //    console.log(createMatch)
        //    setNewMatch(createMatch)
           console.log(newMatch)
        // postNewMatch(newMatch);
   
         fetch("/matches", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(newMatch)
      })
      .then(resp => {
         if (resp.ok) {
              resp.json().then(addedMatch => {
                   postMatch(addedMatch)
                   setNewMatch(defaultData)
                   navigate('/match')
              })
         } else {
             resp.json().then(errors => {
                  setErrors(errors.error)
             })
         }
      })
       
    }

    // const displayErrors =    errors.size > 0 ? errors.map(error => <p>{error}</p>) : null 

    //const displayErrors =    <p style= {{color:"red"}}className="text-center">{errorMsg}</p> 

    // function postNewMatch(newMatch) {
    //     console.log(newMatch)
     
    // }
    
  return (
    <div>
     <div className="container-flex row justify-content-center" >
          <form onSubmit={handleSubmit}>
                <input class="form-control" type="text" placeholder="Game #" aria-label="game" name="game" value={newMatch.game} onChange={handleChange} />
            
             
          <select class="form-select" value={newMatch.home_team} name="home_team" onChange={handleChange} aria-label="Default select example">
             <option selected="">select home team</option>
             <option value="Arsenal">Arsenal</option>
             <option value="Aston Villa FC">Aston Villa FC</option>
             <option value="Bournemouth AFC ">Bournemouth AFC </option>
             <option value="Brentford">Brentford</option>
             <option value="Brighton & Hove Albion">Brighton & Hove Albion</option>
             <option value="Chelsea">Chelsea</option>
             <option value="Crystal Palace">Crystal Palace</option>
             <option value="Everton FC">Everton FC</option>
             <option value="Fulham">Fulham</option>
             <option value="Leicester City FC">Leicester City FC</option>
             <option value="Leeds United">Leeds United</option>
             <option value="Liverpool FC">Liverpool FC</option>
             <option value="Manchester City FC">Manchester City FC</option>
             <option value="Manchester United FC">Manchester United FC</option>
             <option value="Newcastle United">Newcastle United</option>
             <option value="Nottingham Forest">Nottingham Forest</option>
             <option value="Southampton FC">Southampton FC</option>
             <option value="Tottenham Hotspur FC">Tottenham Hotspur FC</option>
             <option value="West Ham United">West Ham United</option>
             <option value="Wolverhampton Wanderers">Wolverhampton Wanderers</option>
           </select>
     
              <input class="form-control" type="text" value={newMatch.home_score}name="home_score" onChange={handleChange} placeholder="Home team score" aria-label="default input example"/>

          <select class="form-select"  value={newMatch.hometeam_img_url} name="hometeam_img_url" onChange={handleChange} aria-label="Default select example">
            <option selected="">select home team img url</option>
             <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/Arsenal_2002-Pres-1-150x150.png">Arsenal</option>
             <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/aston_villa_fc_2016-pres-150x150.png">Aston Villa FC</option>
             <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/afc_bournemouth_2013-pres-150x150.png">Bournemouth AFC </option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2021/12/brentford_fc_2017-pres-150x150.png">Brentford</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/06/brighton_hove_albion_fc_2000-2011-150x150.png">Brighton & Hove Albion</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/chelsea_fc_2003-2005-150x146.png">Chelsea</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/crystal_palace_fc_2013-pres-150x150.png">Crystal Palace</option>
              <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/everton_fc_2013-2014-150x150.png">Everton FC</option>
             <option value="http://sportslogohistory.com/wp-content/uploads/2020/11/fulham_fc_2001-pres-150x150.png">Fulham</option>
             <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/leicester_city_fc_1992-2009-150x150.png">Leicester City FC</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/11/leeds_united_FC._2002-pres-150x150.png">Leeds United</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/liverpool_fc_1993-1999-150x150.png">Liverpool FC</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/manchester_city_fc_2016-pres-150x150.png">Manchester City FC</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/manchester_united_fc_1998-pres-150x150.png">Manchester United FC</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/newcastle_united_fc_1988-pres-150x150.png">Newcastle United</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2022/08/nottingham_forest_fc_2008-2010-150x150.png">Nottingham Forest</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/southampton_fc_2010-150x150.png">Southampton FC</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/tottenham_hotspur_fc_2006-pres.png">Tottenham Hotspur FC</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/west_ham_united-fc_1999-2016-150x150.png">West Ham United</option>
            <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/wolverhampton_wanderers_2002-pres-150x150.png">Wolverhampton Wanderers</option>
      </select>
        
    
    <select class="form-select"  value={newMatch.away_team} name="away_team" onChange={handleChange} aria-label="Default select example">
      <option selected="">select away team</option>
       <option value="Arsenal">Arsenal</option>
       <option value="Aston Villa FC">Aston Villa FC</option>
       <option value="Bournemouth AFC ">Bournemouth AFC </option>
       <option value="Brentford">Brentford</option>
       <option value="Brighton & Hove Albion">Brighton & Hove Albion</option>
       <option value="Chelsea">Chelsea</option>
       <option value="Crystal Palace">Crystal Palace</option>
       <option value="Everton FC">Everton FC</option>
       <option value="Fulham">Fulham</option>
       <option value="Leicester City FC">Leicester City FC</option>
       <option value="Leeds United">Leeds United</option>
       <option value="Liverpool FC">Liverpool FC</option>
       <option value="Manchester City FC">Manchester City FC</option>
       <option value="Manchester United FC">Manchester United FC</option>
       <option value="Newcastle United">Newcastle United</option>
       <option value="Nottingham Forest">Nottingham Forest</option>
       <option value="Southampton FC">Southampton FC</option>
       <option value="Tottenham Hotspur FC">Tottenham Hotspur FC</option>
       <option value="West Ham United">West Ham United</option>
       <option value="Wolverhampton Wanderers">Wolverhampton Wanderers</option>
     </select>

        <input class="form-control" type="text" value={newMatch.away_score} name="away_score" onChange={handleChange} placeholder="away team score " aria-label="default input example"/>
    
     <select class="form-select" value={newMatch.awayteam_img_url} name="awayteam_img_url" onChange={handleChange} aria-label="Default select example">
       <option selected="">select away team img url</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/Arsenal_2002-Pres-1-150x150.png">Arsenal</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/aston_villa_fc_2016-pres-150x150.png">Aston Villa FC</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/afc_bournemouth_2013-pres-150x150.png">Bournemouth AFC </option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2021/12/brentford_fc_2017-pres-150x150.png">Brentford</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/06/brighton_hove_albion_fc_2000-2011-150x150.png">Brighton & Hove Albion</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/chelsea_fc_2003-2005-150x146.png">Chelsea</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/crystal_palace_fc_2013-pres-150x150.png">Crystal Palace</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/everton_fc_2013-2014-150x150.png">Everton FC</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/11/fulham_fc_2001-pres-150x150.png">Fulham</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/leicester_city_fc_1992-2009-150x150.png">Leicester City FC</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/11/leeds_united_FC._2002-pres-150x150.pngd">Leeds United</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/liverpool_fc_1993-1999-150x150.png">Liverpool FC</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/manchester_city_fc_2016-pres-150x150.png">Manchester City FC</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/manchester_united_fc_1998-pres-150x150.png">Manchester United FC</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/04/newcastle_united_fc_1988-pres-150x150.png">Newcastle United</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2022/08/nottingham_forest_fc_2008-2010-150x150.png">Nottingham Forest</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/southampton_fc_2010-150x150.png">Southampton FC</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/tottenham_hotspur_fc_2006-pres.png">Tottenham Hotspur FC</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/west_ham_united-fc_1999-2016-150x150.png">West Ham United</option>
       <option value="http://sportslogohistory.com/wp-content/uploads/2020/05/wolverhampton_wanderers_2002-pres-150x150.png">Wolverhampton Wanderers</option>
      </select>
    <button class="btn btn-primary" type="submit">submit</button>
    
   </form>
  
  
    
  </div>
  </div>
  )
}

export default MatchForm








