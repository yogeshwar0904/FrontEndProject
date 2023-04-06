import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeHeader from '../components/HomeHeader'
const RootLayout = () => {
  return (
    <div>
        <HomeHeader/>
        <Outlet/>
    </div>
  )
}

export default RootLayout