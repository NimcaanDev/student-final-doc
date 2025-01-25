import React, { useEffect } from 'react'
import DashboardHeader from './dashboardHeader'

const DashboardLayout = () => {
    const userData = JSON.parse(localStorage.getItem('userData'))

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