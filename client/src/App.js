import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
// import { Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);


  return (
    <>
    { currentUser ? (
      <AuthApp setCurrentUser={setCurrentUser} currentUser = {currentUser}/>
    ) : (
      <NonAuthApp setCurrentUser={setCurrentUser}/>
    )
  }
  </>
  )
}

export default App;
