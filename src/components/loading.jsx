import React from 'react'
import { ImSpinner2 } from 'react-icons/im'

const Loading = () => {
    return (
        <div className='w-full h-full flex justify-center items-center bg-transparent animate-spin'>
            <ImSpinner2 />
        </div>
    )
}

export default Loading