import React from 'react'
import Header from '../components/header'
import Content from '../components/content'

const MainPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Content />
    </div>
  )
}

export default MainPage