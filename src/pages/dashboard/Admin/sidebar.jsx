import React, { useState, useRef, useEffect } from 'react'
import {
    FaHome,
    FaUser,
    FaUsers,
    FaBook,
    FaBookOpen,
    FaUpload,
    FaBars,
} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

// Sidebar link data
const SIDEBAR_LINKS = [
    { name: 'Home', icon: FaHome, href: '', isHome: true },
    { name: 'User', icon: FaUser, href: 'user' },
    { name: 'Faculty', icon: FaUsers, href: 'faculty' },
    { name: 'Class', icon: FaBook, href: 'class' },
    { name: 'Course', icon: FaBookOpen, href: 'course' },
    { name: 'Upload', icon: FaUpload, href: 'upload' },
]

const SidebarDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const sidebarRef = useRef(null)
    const location = useLocation()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setIsSidebarOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Function to check if the link is active
    const isActive = (href) => location.pathname === `/${href}`

    return (
        <>
            {/* Hamburger Menu Button (Mobile Only) */}
            <button
                onClick={toggleSidebar}
                className='fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-lg md:hidden z-50'
            >
                <FaBars className='w-6 h-6' />
            </button>

            {/* Sidebar */}
            <motion.div
                ref={sidebarRef}
                className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transform transition-transform duration-200 ease-in-out ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:relative`}
                animate={{ width: isSidebarOpen ? 256 : 64 }}
            >
                {/* Sidebar Content */}
                <div className='flex items-center mb-6'>
                    <h1 className='text-xl font-bold'>Dashboard</h1>
                </div>
                <nav>
                    <ul className='space-y-2'>
                        {SIDEBAR_LINKS.map((item) => (
                            <li key={item.href}>
                                <Link
                                    to={item.href}
                                    className={`flex items-center p-2 rounded transition-all ${
                                        isActive(item.href)
                                            ? 'bg-blue-700 text-white'
                                            : 'hover:bg-gray-700'
                                    }`}
                                >
                                    {/* Icon */}
                                    <item.icon className='w-6 h-6' />

                                    {/* Tooltip for collapsed state */}
                                    <AnimatePresence>
                                        {!isSidebarOpen && (
                                            <motion.span
                                                className='absolute left-16 bg-gray-900 text-white text-sm rounded-md px-2 py-1 shadow-lg whitespace-nowrap'
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.95,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.95,
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>

                                    {/* Text */}
                                    <AnimatePresence>
                                        {isSidebarOpen && (
                                            <motion.span
                                                className='ml-4 whitespace-nowrap'
                                                initial={{
                                                    opacity: 0,
                                                    width: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    width: 'auto',
                                                }}
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
        </>
    )
}

export default SidebarDashboard
