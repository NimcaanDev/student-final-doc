import React, { useEffect } from 'react'
import DashboardHeader from './dashboardHeader'
import { useNavigate } from 'react-router-dom'

const DashboardLayout = () => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()

    useEffect(() => {
        if (!userData) {
            navigate('studentdocs/auth/login')
        }
    }, [userData])
    return (
        <div className='dashboard'>
            <DashboardHeader />
        </div>
    )
}

export default DashboardLayout