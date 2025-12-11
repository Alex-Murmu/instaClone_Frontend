import React, { useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogHeader } from '@/components/ui/dialog'
import { Bookmark, Heart, MessageCircle, MoreHorizontal, Send } from 'lucide-react'
import { Button } from '../ui/button'
import Pic from "../../assets/vietnam.jpg"
import { Input } from '../ui/input'
import CommentDialog from './CommentDialog'


export default function Post() {
    const [text,setText] = useState("");
    const [open,setOpen] = useState(false);
    
    const ChangeEventHandler = (e)=>{
       const InputText= e.target.value;
       if(InputText.trim()){
        setText(InputText);
       }
       else{
        setText("");
       }
    }
    
    return (
        <div className='my-8 w-full max-w-sm mx-auto'>
            <div className='flex items-center justify-between'>
                <div className='flex justify-center gap-2 items-center'>
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                    <h1 className='p-0'>Username</h1>
                     <p className='text-sm font-light text-gray-500 p-0'>Audio</p>
                    </div>
                </div>
                <Dialog className="cursor-pointer">
                    <DialogTrigger><MoreHorizontal className="cursor-pointer" /></DialogTrigger>
                    <DialogContent className="w-60  md:w-89 pt-2 text-center flex flex-col justify-center items-center ">
                        <DialogTitle className="text-sm p-0">Are you absolutely sure?</DialogTitle>
                        <Button variant="ghost" className="cursor-pointer w-fit text-red-600">Unfollow</Button>
                        <Button variant="ghost" className="cursor-pointer w-fit">add to favorite</Button>
                        <Button variant="ghost" className="cursor-pointer w-fit">Delete</Button>
                    </DialogContent>
                </Dialog>
            </div>
            <img className='rounded-sm my-2 object-cover aspect-auto object-center' src={Pic} alt="post_image" />
            <div className='flex justify-between'>
                <div className='flex  gap-3 justify-center items-center'>
                <Heart onClick={()=>{console.log("like")}} size={30} className=''/>
                <MessageCircle onClick={()=>setOpen(true)} size={30}  className='cursor-pointer hover:text-gray-600 hover:scale-110 transition-all'/>
                <Send size={30} className='cursor-pointer hover:text-gray-600 hover:scale-110 transition-all'/>
                </div>
                <Bookmark  size={30} className='cursor-pointer hover:text-gray-600 hover:scale-110 transition-all'/>
            </div>
            <div>
                <p className='font-semibold text-sm'>2,012 likes</p>
                 <p><span className='font-semibold'>username</span> 
                 captions</p>
                <span onClick={()=>setOpen(true)} className='text-neutral-400 font-thin cursor-pointer'>View all 435 comments</span>
                <CommentDialog open={open} setOpen={setOpen} />
                <div className='flex items-center justify-between'>
                    <Input 
                    type={"text"}
                    value={text}
                    onChange={ChangeEventHandler}
                    placeholder={"commnet............"}
                    className="outline-none text-sm w-full focus-visible:ring-transparent border-none pl-0 "/>
                    {text && <button className='text-blue-400 cursor-pointer'>Post</button>}
                </div>
            </div>
        </div>
    )
}
