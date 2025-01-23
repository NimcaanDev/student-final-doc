import { InfoCircledIcon } from '@radix-ui/react-icons'
import { Callout } from '@radix-ui/themes'
import React from 'react'

const ErrorAlert = ({ message }) => {
    return (
        <div className='my-4'>
            <Callout.Root color="red">
                <Callout.Icon>
                    <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>
                    {message}
                </Callout.Text>
            </Callout.Root>
        </div >
    )
}

export default ErrorAlert