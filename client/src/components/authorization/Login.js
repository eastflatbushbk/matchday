import React, { useContext,  useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ErrorContext } from '../../context/ErrorContext';
import { UserContext } from '../../context/UserContext';

function Login() {
      const [password, setPassword] = useState("")
      const [username, setUsername] = useState("")
      
      const { errors, setErrors} = useContext(ErrorContext)
      const { loginUser} = useContext(UserContext)

      const navigate = useNavigate();

     
      function handleLogInSubmit(event){
        event.preventDefault()
        setErrors([])
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
                navigate('/match')
              })
            } else {
              res.json().then(err => {
                
                setErrors(err.errors)
                console.log(err.errors)
              })
            }
          })
      }

      
  return (
   <div className="align-self-center">
    <div className="container-flex bg-info text-center mx-auto p-2 align-self-center"style={{width: "500px"}}>
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
            <div className='text-light fw-bold bg-warning'>{errors}</div>
           
          </form>
          </div>
        </div>
      </div>  
       </div>   
  )
}

export default Login