import React, { useContext } from 'react'
import { ErrorContext } from './ErrorContext'

function Errors() {
    const {errors} = useContext(ErrorContext)

    const displayErrors = errors.map( (error, idx) => <li key={idx}>{error}</li>)
  
    return (
    <ul>{displayErrors}</ul>
  )
}

export default Errors