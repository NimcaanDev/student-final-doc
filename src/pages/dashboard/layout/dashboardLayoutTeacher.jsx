import React, { useEffect } from 'react'
import DashboardHeader from '../dashboardHeader'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBarTeacher from '../Teacher/sidebarTeacher'

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
            <div className="flex">
                <div className='w-[25%]'>
                    <SideBarTeacher />
                </div>
                <div className="bg-slate-300 flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayoutTeacher