import React from 'react'

function Login() {
  return (
    <div>
    <form action="/action_page.php" method="post">
  

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        
    <button type="submit">Login</button>
    
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <button type="button" class="signbtn">Sign in</button>
   
  </div>
</form>
</div>
  )
}

export default Login