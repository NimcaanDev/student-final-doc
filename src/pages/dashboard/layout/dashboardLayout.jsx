import React, { useEffect } from 'react'
import DashboardHeader from '../dashboardHeader'
import { useNavigate } from 'react-router-dom'
import SidebarDashboard from '../Admin/sidebar'

const DashboardLayoutAdmin = () => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()

    useEffect(() => {
        if (!userData) {
            navigate('studentdocs/auth/login')
        }

        if (userData && userData.user.role !== 'admin') {
            navigate('studentdocs/dashboard/teacher')
        }
    }, [userData])
    return (
        <div className='dashboard'>
            <DashboardHeader />
            <SidebarDashboard />
        </div>
    )
}

export default DashboardLayoutAdmin