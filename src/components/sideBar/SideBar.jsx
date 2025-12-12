import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import axios from 'axios'
import { CloudUpload, Compass, HeartIcon, HomeIcon, LogOut, MenuIcon, MessageCircleIcon, PlusSquare, Search, User,  } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'



export default function SideBar() {
    const { user } = useSelector(store => store.auth)
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/auth/logout", {
                withCredentials: true
            });
            toast.success(response.data.message);
            navigate("/login")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const routeItmes = [
        { path: "/", text: "Home", icon: <HomeIcon size={24} /> },
        { path: "/search", text: "Search", icon: <Search size={24} /> },
        { path: "/explore", text: "Explore", icon: <Compass size={24} /> },
        { path: "/message", text: "Message", icon: <MessageCircleIcon size={24} /> },
        { path: "/notification", text: "Notification", icon: <HeartIcon size={24} /> },
        { path: "/create", text: "Create", icon: <PlusSquare size={24} /> },
        { path: "/profile", text: "Profile", icon: <Avatar><AvatarImage src={user?.profilePicture} /><AvatarFallback>CN</AvatarFallback></Avatar> },
        { action: "logout", text: "Logout", icon: <LogOut /> }
    ]

    return (
        <div className=''>
            <div className='hidden fixed md:flex flex-col gap-3 ml-5 border-r rounded-lg mt-10 w-60 h-screen'>
                {routeItmes.map((item, index) => {
                    if (item.action === "logout") {
                        return (
                            <div key={index} className='flex gap-4 p-3 hover:bg-neutral-100 rounded-lg cursor-pointer'
                                onClick={logoutHandler}
                            >
                                <div>{item.icon}</div>
                                <div>{item.text}</div>
                            </div>
                        )
                    }
                    if(item.text==="Create"){
                        return (
                            <div key={index} className='cursor-pointer p-3 hover:bg-neutral-100 rounded-lg'>
                                <Dialog>
                                    <DialogTrigger>
                                        <div className='cursor-pointer flex  gap-4 items-center '>
                                            <div>{item.icon}</div>
                                            <div>Create</div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="h-96">
                                        <div className='flex items-center h-fit gap-5 '>
                                            <Avatar>
                                                <AvatarFallback><CloudUpload /></AvatarFallback>
                                            </Avatar>
                                                 <div>
                                                    <p className='font-semibold text-sm '>Upload Files</p>
                                                    <p className='text-xs text-neutral-400'>Select and upload files oof Your chooise</p>
                                                 </div>
                                        </div>
                                         <div className='border h-70 flex items-center justify-center'>
                                            <input type="file" name="" id="" className='border rounded-md pl-3 cursor-pointer hover:bg-neutral-200 active:bg-gray-600' />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        )
                    }
                    return (
                        <Link to={item.path} key={index} className='flex gap-4 p-3 hover:bg-neutral-100 rounded-lg'>
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                        </Link>
                    )
                })}

                <Dialog className="">
                    <DialogTrigger className='flex gap-2 hover:bg-neutral-200flex pl-4 cursor-pointer hover:bg-neutral-200 p-3 rounded-lg'><MenuIcon />Menu</DialogTrigger>
                    <DialogContent className='w-60 md:w-90 bg-white flex flex-col'>
                        <DialogTitle className={"text-center"}>choose any of them</DialogTitle>
                        <Link className='p-2 py-3 text-center transition-colors duration-300 hover:bg-neutral-200 rounded-md' to={"http://loclahost:8000/api/user/"} variant={"ghost"}>jobs</Link>
                        <Link className='p-2 py-3 text-center transition-colors duration-300 hover:bg-neutral-200 rounded-md' to={"http://loclahost:8000/api/user/"} variant="ghost">Service</Link>
                        <Link className='p-2 py-3 text-center transition-colors duration-300 hover:bg-neutral-200 rounded-md' to={"http://loclahost:8000/api/user/"} variant="ghost">Dashboard</Link>
                        <Link className='p-2 py-3 text-center transition-colors duration-300 hover:bg-neutral-200 rounded-md' to={"http://loclahost:8000/api/user/"} variant="ghost">Contact us</Link>
                        <Link className='p-2 py-3 text-center transition-colors duration-300 hover:bg-neutral-200 rounded-md' to={"http://loclahost:8000/api/user/"} variant="ghost">New To Dashboard</Link>
                    </DialogContent>
                </Dialog>
            </div>

            <div className='md:hidden fixed bottom-0 left-0 right-0 h-10 bg-white/30 backdrop-blur-sm rounded-full overflow-hidden flex justify-around items-center z-50'>
                {routeItmes.map((item, index) => {
                    if (item.action === "logout") {
                        return (
                            <div key={index} className='flex gap-4 p-3 hover:bg-neutral-100 rounded-lg'
                                onClick={logoutHandler}
                            >
                                <div>{item.icon}</div>
                            </div>
                        )
                    } if(item.text==="Create"){
                        return (
                            <div key={index} className='cursor-pointer p-3 hover:bg-neutral-100 rounded-lg'>
                                <Dialog>
                                    <DialogTrigger>
                                        <div className='cursor-pointer flex  gap-4 items-center '>
                                            <div>{item.icon}</div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="h-96">
                                        <div className='flex items-center h-fit gap-5 '>
                                            <Avatar>
                                                <AvatarFallback><CloudUpload /></AvatarFallback>
                                            </Avatar>
                                                 <div>
                                                    <p className='font-semibold text-sm '>Upload Files</p>
                                                    <p className='text-xs text-neutral-400'>Select and upload files oof Your chooise</p>
                                                 </div>
                                        </div>
                                        <div className='border h-70 flex items-center justify-center'>
                                            <input type="file" name="" id="" className='border rounded-md pl-3 cursor-pointer hover:bg-neutral-200 active:bg-gray-600' />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        )
                    }
                    
                    return (
                        <Link to={item.path} key={index} className='flex gap-4 p-3 hover:bg-neutral-100 rounded-lg'>
                            <div>{item.icon}</div>
                        </Link>
                    )

                })}

            </div>
        </div>
    )
}
