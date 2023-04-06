import { createContext, useEffect, useState } from "react";


const UserContext = createContext({})

const UserProvider = ({setLoading, children}) => {

    const [users, setUsers] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    // useEffect(() =>{
    //     fetch('/me')
    //     .then(res => res.json())
    //     .then(data => {
    //         if(!data.errors) {
    //             loginUser(data)
    //         }else{
    //             setLoading(false)
    //         }
    //     })
    // },[setLoading])

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then(user => {
              console.log(user)
              loginUser(user)
                         })
          }
          else {
            // setAuthCheck(true)
            setLoading(false)
          }
        })
      }, [setLoading]);

    const loginUser = user => {
        setCurrentUser(user);
        setLoggedIn(true)
      }
    
      const logoutUser = () => {
        setCurrentUser(null);
        setLoggedIn(false)
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
            setLoading(false)
          })
        }
      }, [loggedIn, setLoading])

      return <UserContext.Provider value={{ users, loggedIn, currentUser, addUser, loginUser, logoutUser }}>{ children }</UserContext.Provider>
}

export { UserContext , UserProvider}