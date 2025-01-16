import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col h-full justify-center items-center'>
      <h1>404</h1>
      <p>Page is not found!</p>
      <button className='bg-black text-white px-5 py-2 rounded-md'>
        <Link to='/studentdocs'>Back to home</Link>
      </button>
    </div>
  )
}

export default NotFound