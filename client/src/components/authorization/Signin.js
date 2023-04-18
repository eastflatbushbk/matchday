import React, { useContext, useState } from 'react'
import { ErrorContext } from '../../context/ErrorContext'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

function Signin() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const [age, setAge] = useState("")
    const [location, setLocation] = useState("")
    const [favorite, setFavorite] = useState("")
    const [confirmation, setConfirmation] = useState("")

    const { errors, setErrors} = useContext(ErrorContext)
    const {addUser, loginUser} = useContext(UserContext)
    const navigate = useNavigate()



    function handleSignInSubmit(event){
        event.preventDefault()
        setErrors([])
        console.log("sgn in submited") 
        const createUser = {
          username: username,
          age: age,
          location: location,
          favorite_club: favorite,
          password: password,
          password_confirmation: confirmation
         }
        

        fetch('/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(createUser),
        })
        // .then((res) => res.json())
        // .then((user) => {
        //   if (!user.errors) {
        //         addUser(user)
        //         loginUser(user)
        //         // setLogin(true)
        //         navigate('/match')
                
        //       // })
        //     } else {
        //       // res.json().then(user => {
        //         const displayErrors = user.errors.map( (error, idx) => <li key={idx}>{error}</li>)
        //          setErrors(displayErrors)
        //         console.log(user)
        //       // })
        //     }
        //   })
        .then(res => {
            if (res.ok) {
              res.json().then(user => {
                addUser(user)
                loginUser(user)
                // setErrors([])
                navigate('/match')
              })
            } else {
              res.json().then(err => {
                console.log(err)
                // setErrors(err.errors)
                //  const displayErrors = err.errors
               console.log(err.age)
              const errorArr = []
                // if (err.age !== undefined){setErrors(`age : ${err.age}`) }
                //  if (err.username !== undefined){setErrors(`username : ${err.username}`)}
                if (err.age !== undefined){ errorArr.push(`age : ${err.age}`) }
                 if (err.username !== undefined){errorArr.push(`username : ${err.username}`)}
                
                
                if (err.location !== undefined){ errorArr.push(`location : ${err.location}`) }
                if (err.favorite_club !== undefined){ errorArr.push(`favorite_club : ${err.favorite_club}`) }
                if (err.password !== undefined){ errorArr.push(`password : ${err.password}`) }
                if (err.password_confirmation !== undefined){ errorArr.push(`password_confirmation : ${err.password_confirmation}`) }
                 console.log(errorArr)
                 setErrors(errorArr)
              })
            }
          })
       }
 console.log(errors)
       const displayErrors = errors.map( error => <li >{error}</li>)
    // const matchList = matches.map( m => <MatchCard key={m.id} match={m}  />)

  return (
    <div style={{alignItems: "center", justifyContent: "center"}}>
    <div className="container-flex bg-light text-center  mx-auto p-2 ">
        <div className="container-flex row justify-content-center">
          <div className="container-flex col-lg-6">
          <form className="bg-warning p-3" onSubmit={handleSignInSubmit}>
            <h2 className="text-light">SIGN IN</h2>
            <p className="text-light">Please enter your credentials to Sign in.</p>                
            <div className="mb-3 input-group ">
              <span className="input-group-text">Username</span>
              <input className=" form-control text-end"
                  aria-label="Username" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            {/* <div className='text-light fw-bold bg-warning'>{usernameError}</div> */}
            <div className="mb-3 input-group ">
              <span className="input-group-text">Age</span>
              <input className="form-control text-end"
                  aria-label="Username" type="number" placeholder="age" onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div className="mb-3 input-group ">
              <span className="input-group-text">Location</span>
              <input className="form-control text-end"
                  aria-label="Username" type="text" placeholder="location" onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div className="mb-3 input-group ">
              <span className="input-group-text">Favorite Club</span>
              <input className="form-control text-end"
                  aria-label="Username" type="text" placeholder="favorite club" onChange={(e) => setFavorite(e.target.value)}/>
            </div>
            <div className="mb-3 input-group ">
              <span className="input-group-text">Password</span>
              <input className="form-control text-end"
                  aria-label="Username" type="password" placeholder="password"onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="mb-3 input-group ">
              <span className="input-group-text">Password Confirmation</span>
              <input className="form-control text-end"
                  aria-label="Username" type="password" placeholder="password confirmation"onChange={(e) => setConfirmation(e.target.value)}/>
            </div>
            <button>sign in</button>
            {/* <p className="">registered already? <Link to="/login">log in</Link></p> */}
            <div className='text-light fw-bold bg-warning'>{displayErrors}</div>
          </form>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Signin