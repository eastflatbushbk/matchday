import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { ErrorContext } from './ErrorContext';
import { UserContext } from './UserContext';

function Login({  authCheck }) {
      const [password, setPassword] = useState("")
      const [username, setUsername] = useState("")

      const [age, setAge] = useState("")
      const [location, setLocation] = useState("")
      const [favorite, setFavorite] = useState("")
      const [confirmation, setConfirmation] = useState("")

      const [login, setLogin] = useState(true)

      const {setErrors} = useContext(ErrorContext)
      const {addUser, loginUser, loggedIn} = useContext(UserContext)

      const navigate = useNavigate();

      useEffect(() => {
           
        if(!authCheck && loggedIn) {
          navigate('/match')
        }
        return () => {
         
          setErrors([])
        }
      }, [authCheck, loggedIn, navigate, setErrors])

      function handleLogInSubmit(event){
        event.preventDefault()

        console.log("log in submited")

        fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username, password})
        })
          .then(res => {
            if (res.ok) {
              res.json().then(user => {
                loginUser(user)
                setErrors([])
                navigate('/match')
              })
            } else {
              res.json().then(errors => {
                setErrors(errors.errors)
              })
            }
          })
      }

      function handleSignInSubmit(event){
        event.preventDefault()

        console.log("sgn in submited")

        fetch('/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username, password, age, location, favorite, confirmation})
        })
          .then(res => {
            if (res.ok) {
              res.json().then(user => {
                addUser(user)
                loginUser(user)
                setLogin(true)
                navigate('/match')
                
              })
            } else {
              res.json().then(errors => {
                setErrors(errors)
              })
            }
          })
      }
      function handleSignIn (){ setLogin(false)}
      function handleLogIn (){ setLogin(true)}

     const authForm = login ? (
      <div className="container-flex bg-info text-center">
        <div className="container-flex row justify-content-center">
          <div className="container-flex col-lg-6">
          <form className="login-form" onSubmit={handleLogInSubmit}>
            <h2 className="text-light">Please Login</h2>
            <p>Please enter your credentials.</p>
            <div className="mb-3 input-group justify-content-center">
              <span className="input-group-text">Username</span>
              <input className="form-control text-end"
                  aria-label="Username" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="mb-3 input-group  justify-content-center">
              <span className="input-group-text">Password</span>
              <input className="form-control text-end"
                  aria-label="Username" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button>login</button>
            <p className="message">Not registered? <Link to="#"onClick={handleSignIn}>Create an account</Link></p>
          </form>
          </div>
        </div>
      </div>      
      ) : (
      <div className="container-flex bg-danger text-center">
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
            <p className="">registered already? <Link to="#"onClick={handleLogIn}>log in</Link></p>
          </form>
          </div>
        </div>
      </div>
   ) 
  return (




    <>
    {authForm}
    </>
  )
}

export default Login