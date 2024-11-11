import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='error-container'>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go Back to Home</Link>
    </div>
  )
}

export default Error