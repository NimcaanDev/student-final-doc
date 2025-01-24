import React from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

const Loading = () => {
    return (
        <div className='w-full h-full flex justify-center items-center bg-transparent text-2xl animate-spin'>
            <CgSpinnerTwo />
        </div>
    )
}

export default Loading