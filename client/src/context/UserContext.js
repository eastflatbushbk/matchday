import { createContext, useEffect, useState } from "react";
 import { useNavigate } from "react-router-dom";


const UserContext = createContext({})

const UserProvider = ({setRendering, children}) => {

    const [users, setUsers] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
     const navigate = useNavigate();

   
    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then(user => {
              console.log(user)
              loginUser(user)
                         })
          }
          else {
            // setRendering(true)
            setRendering(false)
          }
        })
      }, [setRendering]);

    const loginUser = user => {
        setCurrentUser(user);
        setLoggedIn(true)
      }
    
      const logoutUser = () => {
        setCurrentUser(null);
        setLoggedIn(false)
        console.log("logoutuser")
         navigate('/login')

      }
    
      const addUser = user => {
        setUsers([...users, user])
      }

      useEffect(() => {
        if(loggedIn) {
          fetch("/users")
          .then(resp => resp.json())
          .then(data => {
            setUsers(data)
            setRendering(false)
          })
        }
      }, [loggedIn, setRendering])

      return <UserContext.Provider value={{ users, loggedIn, currentUser, addUser, loginUser, logoutUser }}>{ children }</UserContext.Provider>
}

export { UserContext , UserProvider}