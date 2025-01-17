import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../components/back'

const NotFound = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1 className='text-blue-700 text-5xl font-bold'>404</h1>
      <p>Page is not found!</p>
      <div className='mt-5'>
        <Back />
      </div>
    </div>
  )
}

export default NotFound