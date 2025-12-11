import React from 'react'
import Signup from './components/Auth_Components/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Auth_Components/Login'
import Home from './components/comp/Home'
import { Toaster } from 'sonner'
import MainLayout from './MainLayout'
import Profile from './components/outlates/Profile'
import Create from './components/outlates/Create'
const route = createBrowserRouter([
  // Private Routes
{path:"/" , element:<MainLayout />,
 children:[
  {path:"/" ,element:<Home />  },
  {path:"profile" , element:<Profile />},
  {path:"create", element:<Create />}
 ]},
 /// public Routes 
 {path:"/login" , element:<Login />},
 {path:"/signup" , element:<Signup />}
])
export default function App() {
  return (
    <div>
         <RouterProvider router={route} />
         <Toaster position='top-center' />
    </div>
  )
}
