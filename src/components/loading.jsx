import React from 'react'
import { HashLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <HashLoader size={25} color="#1d4ed8" />
        </div>
    )
}

export default Loading