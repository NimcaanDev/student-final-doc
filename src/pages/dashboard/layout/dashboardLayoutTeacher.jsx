import React, { useEffect } from 'react'
import DashboardHeader from '../dashboardHeader'
import { useNavigate } from 'react-router-dom'

const DashboardLayoutTeacher = () => {
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
            <div className='dashboard-content'>
                <h1 className='text-4xl'>Teacher Dashboard</h1>
            </div>
        </div>
    )
}

export default DashboardLayoutTeacher