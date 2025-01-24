import React from 'react'

const ErrorAlert = ({ message }) => {
    return (
        <div className='my-4 bg-red-300 border border-red-600 text-red-600 px-3'>
            {message}
        </div >
    )
}

export default ErrorAlert