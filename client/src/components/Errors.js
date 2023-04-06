import React, { useContext } from 'react'
import { ErrorContext } from './ErrorContext'

function Errors() {
    const {errors} = useContext(ErrorContext)
    const displayErrors = errors.map((idx , error) => <li key={idx}>{error}</li>)
  return (
    <div>{displayErrors}</div>
  )
}

export default Errors