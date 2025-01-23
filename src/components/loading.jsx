import { Spinner } from '@radix-ui/themes'
import React from 'react'

const Loading = () => {
    return (
        <div className='w-full h-full flex justify-center items-center bg-transparent'>
            <Spinner size='3' />
        </div>
    )
}

export default Loading