import { Alert } from '@mui/material'
import React from 'react'

const ErrorAlert = ({ message }) => {
    return (
        <div className='my-4'>
            <Alert severity="error">{message}</Alert>
        </div >
    )
}

export default ErrorAlert