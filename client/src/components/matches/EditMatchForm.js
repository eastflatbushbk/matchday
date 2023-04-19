import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorContext } from '../../context/ErrorContext'
import { MatchContext } from '../../context/MatchContext'
import { UserContext } from '../../context/UserContext'


const defaultData = {
    game: "",
    home_team: "",
    away_team: "",
    home_score: "",
    away_score: "",
    hometeam_img_url: "",
    awayteam_img_url: ""
    }

function EditMatchForm({rendering}) {

    const [ modifiedMatch, setModifiedMatch ] = useState(defaultData)
    
    const {matches, patchMatch} = useContext(MatchContext)
    const {setErrors} = useContext(ErrorContext)
    const {currentUser, loggedIn} = useContext(UserContext)

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)
     const id = location.state.id
        console.log(id)

    useEffect(() => {
        if(!rendering && !loggedIn) {
          navigate('/login')
        }
        const match = matches.find(match => match.id === parseInt(id))
       
        if(!rendering && currentUser.id !== match.user_id) {
            navigate('/match')
          }
         
          setModifiedMatch({
            game: match.game,
            home_team: match.home_team,
            away_team: match.away_team,
            home_score: match.home_score,
            away_score: match.away_score,
            hometeam_img_url: match.hometeam_img_url,
            awayteam_img_url: match.awayteam_img_url
          })
        
      }, [matches, rendering, loggedIn, currentUser, id, navigate])

    function handleChange (event){
        setModifiedMatch({
            ...modifiedMatch, [event.target.name]:event.target.value
  
            
          })
    }

    const goBack = () => {
      navigate(-1);
      setErrors([])
    }


    function handleSubmit (event ){
        event.preventDefault()
       

        fetch(`/matches/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(modifiedMatch)
        })
        .then(resp => {
           if (resp.ok) {
                resp.json().then(editedMatch => {
                    console.log(editedMatch)
                     patchMatch(editedMatch)
                     setModifiedMatch(defaultData)
                     navigate('/match')
                })
           } else {
               resp.json().then(errors => {
                    setErrors(errors.error)
               })
           }
        })

    }


  return (

   
<>

     <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example"></input>
 
    <div className="container-flex row  bg-secondary  justify-content-center">
         <div className="col-lg-4">
        <form onSubmit={handleSubmit}>
                <input className="form-control" type="text" value={modifiedMatch.game} name="game" onChange={handleChange} placeholder="Game #" aria-label="default input example"/>
          <select className="form-select" value={modifiedMatch.home_team} name="home_team" onChange={handleChange} aria-label="Default select example">
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
     
                <input className="form-control" type="text" value={modifiedMatch.home_score} name="home_score" onChange={handleChange} placeholder="Home team score" aria-label="default input example"/>
          <select className="form-select"  value={modifiedMatch.hometeam_img_url} name="hometeam_img_url" onChange={handleChange} aria-label="Default select example">
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
        
    
    <select className="form-select"  value={modifiedMatch.away_team} name="away_team" onChange={handleChange} aria-label="Default select example">
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
        <input className="form-control" type="text" value={modifiedMatch.away_score} name="away_score" onChange={handleChange} placeholder="away team score " aria-label="default input example"/>
    
     <select className="form-select" value={modifiedMatch.awayteam_img_url} name="awayteam_img_url" onChange={handleChange} aria-label="Default select example">
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
    <button className="btn btn-primary" type="submit">submit</button>
    &nbsp;
    <button className="btn btn-primary" onClick={goBack} type="button">cancel</button>
    
   </form>
   
  
    
  </div>
  </div>

</>
  )

  
}

export default EditMatchForm