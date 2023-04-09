import React from 'react'
import { Link } from 'react-router-dom'

function MatchCard({match}) {

    




  return (    
    <div className="container-fluid bg-dark py-5">
      <h1 className="text-success text-center fw-bolder"> Game - {match.game}</h1>
      <h3 className="text-warning text-center fw-bolder">{match.home_team} VS {match.away_team}</h3>
      <div className="row">
        <div className="col-lg-5">
          <div className="card bg-warning">
            <img className="card-img-top" src={match.hometeam_img_url} alt={match.hometeam_img_url} style={{width:"20%",float:"left"}}/>
            <div className="card-block">
                <h4>{match.home_team}</h4>  
                <h3>{match.home_score}</h3> 
            </div>            
          </div>
        </div>
        <div className="col-lg-2">
         <p style= {{color:"yellow", fontSize:"36px", marginTop:"35%"}}className="text-center">VS</p>
         <Link to={`/match/${match.id}`}><button type="button" class="btn btn-outline-light">click to expand</button></Link>
        </div>
        <div className="col-lg-5">
          <div className="card bg-info">
            <div class="row">
    
                <div class="col-lg-4 offset-lg-8">
                        <img className="card-img-top" src={match.awayteam_img_url} alt={match.awayteam_img_url} style={{width:"65%"}}/>
                       <div className="card-block">
                        <h4>{match.away_team}</h4> 
                          <h3>{match.away_score}</h3>
                       </div>
                 </div>
             
            </div>            
          </div>       
        <div>            
      </div>
    </div> 
    </div>        
    </div>     
 )
}

export default MatchCard



