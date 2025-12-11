import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './components/sideBar/SideBar'

export default function MainLayout() {
  return (
    <div className='flex'>
        <SideBar />
        <div className='flex justify-center w-full'>
        <Outlet />
        </div>
    </div>
  )
}
