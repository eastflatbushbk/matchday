import React from 'react'
import { Link } from 'react-router-dom'

function MatchCard({match}) {

    




  return (    
    <div className="container-fluid bg-light py-5 border" >
      <div className="row">
      <div className="col-md-2"></div>
         <h3 className="text-success col-md-3 text-start fw-bolder"> Game - {match.game} </h3>
         <div className="col-md-2"></div>
         {/* <h3 className="text-warning col-md-5 text-center fw-bolder">{match.home_team} VS {match.away_team}</h3> */}
         <h5 className='col-md-3 text-end' ><span class="fs-6">posted by:</span> {match.author.username}</h5>
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-3">
          <div className="card bg-warning" style={{alignItems: 'center'}}>
            <img className="card-img-top" src={match.hometeam_img_url} alt={match.hometeam_img_url} style={{width:"20%",float:"left"}}/>
            <div className="card-block" >
                <h4>{match.home_team}</h4>  
                <h3 className=' text-center'>{match.home_score}</h3> 
            </div>            
          </div>
        </div>

        <div className="col-md-2">
         <p style= {{color:"black", fontSize:"36px", marginTop:"35%"}}className="text-center">VS</p>
        
        </div>
     
       
          

               <div className="col-md-3">
                    <div className="card bg-info "style={{alignItems: 'center'}} >
                      
                        <img className="card-img-top" src={match.awayteam_img_url} alt={match.awayteam_img_url} style={{width:"20%"}}/>
                       <div className="card-block">
                        <h4>{match.away_team}</h4> 
                          <h3 className=' text-center'>{match.away_score}</h3>
                       </div>
                 </div>
             
                        
          </div>       
        <div>            
      </div>
    </div> 
    <div className="row p-2">
    <div className="col-md-2"></div>
     <div className="col-md-2">
             <Link to={`/match/${match.id}`}><button type="button" className="btn btn-outline-secondary ">add comment</button></Link>
             </div>
             </div>
    </div>     
 )
}

export default MatchCard



