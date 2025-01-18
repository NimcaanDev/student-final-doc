import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/sidebar'
import faculties from '../data/faculties'

const MainPage = () => {
  // const [selectedFaculty, setSelectedFaculty] = useState(faculties[0]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className="content flex w-full mt-2 gap-3 px-3 md:pr-6 md:px-0">
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainPage