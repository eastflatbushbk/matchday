import {  useState, createContext } from "react";


const ErrorContext = createContext({})

const ErrorProvider = ({children}) => {

  const [errors , setErrors] = useState([]) 
 console.log(errors)
// const displayErrors = errors.map( (error, idx) => <li key={idx}>{error}</li>)

  return <ErrorContext.Provider value={{errors, setErrors}}>{children}</ErrorContext.Provider>

}
export { ErrorContext, ErrorProvider}