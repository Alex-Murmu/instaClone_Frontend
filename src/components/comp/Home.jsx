import React from 'react'
import Feed from '../outlates/Feed'
import { Outlet } from 'react-router-dom'
import RightSidebar from '../sideBar/RightSidebar'

export default function Home() {
    return (
        <div className='md:flex  lg:flex md:ml-90 w-full justify-around'>
            <div className='flex-grow'>
                <Feed />
                <Outlet />
            </div>
            <div className='hidden lg:block'>
            <RightSidebar />
            </div>
        </div>
    )

}