import React from 'react'
import stadium from '../images/stadium.jpg'

function Home() {

    return (
    <div className="container-flex row  bg-secondary-emphasis  justify-content-center">
        <div className="col-lg-8">
        
         <img  src={stadium} className="img-fluid" style={{width:"100%", float:"center"}} alt='stadium'/>
         <h1 className="text--success-emphasis text-center">Welcome to MatchDay Chat </h1>
         </div>
    </div>
    )
}

export default Home