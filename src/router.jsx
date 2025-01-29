import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/mainPage'
import UploadPage from './pages/uploadPage'
import NotFound from './pages/NotFound'
import ProjectOverview from './pages/projectOverview'
import CustomerSupport from './pages/customerSupport'
import MainSection from './components/main-section'
import SinglePost from './pages/SinglePost'
import LoginPage from './pages/auth/loginPage'
import DashboardLayout from './pages/dashboard/dashboardLayout'
import UploadForm from './components/testform'

const router = createBrowserRouter([
  {
    path: '/studentdocs',
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <MainSection />
      },
      {
        path: 'detail/post/:id',
        element: <SinglePost />
      }
    ]
  },
  {
    path: "/studentdocs/test",
    element: <UploadForm />
  },
  {
    path: '/studentdocs/dashboard',
    element: <DashboardLayout />,
    // children: []
  },
  {
    path: '/studentdocs/upload',
    element: <UploadPage />
  },
  {
    path: 'studentdocs/customer-support',
    element: <CustomerSupport />
  },
  {
    path: '/studentdocs/project-overview',
    element: <ProjectOverview />
  },
  {
    path: '/studentdocs/auth/login',
    element: <LoginPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router