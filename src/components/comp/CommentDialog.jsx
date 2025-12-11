import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import React, { useState } from 'react'
import Pic from "@/assets/vietnam.jpg"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { MoreHorizontal } from 'lucide-react'
import { Input } from '../ui/input'
export default function CommentDialog({ open, setOpen }) {
  const [text,setText] = useState("");

  const handleText = (e)=>{
     const textInput = e.target.value;
     if(textInput.trim()){
      setText(textInput);
     }else{
      setText("");
     }
  }
  const sendMessageHandler = ()=>{
    alert(text)
  }
  return (
    <Dialog open={open} className="">
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="md:max-w-5xl p-0 flex flex-col overflow-hidden"
      >
        <div className="flex flex-1 min-w-0">
          <div className="hidden md:block w-1/2 min-w-0 h-96 overflow-hidden">
            <img
              src={Pic}
              alt="Post_image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-96 md:w-1/2 flex flex-col">
            <div className="flex items-center justify-between p-4">
              <div className="flex gap-3 items-center">
                <Link>
                  <Avatar>
                    <AvatarImage src='' />
                    <AvatarFallback>Cn</AvatarFallback>
                  </Avatar>
                </Link>
                <div>
                  <Link className='font-semibold text-sm'>username</Link>
                  {/* <span className='text=gray-600 text-sm'>Bio Here...</span> */}
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild><MoreHorizontal /></DialogTrigger>
                <DialogContent className="flex justify-center">
                  <Button variant="outline">Unfollow</Button>
                  <Button variant="outline">Add to Favorite</Button>
                  <Button variant="outline">Delete</Button>
                </DialogContent>
              </Dialog>
            </div>
            <hr />
            <div className='flex-1 overflow-y-auto max-h-96 p-4'>comments</div>
            <div className='p-4'>
              <div className='flex w-full md:flex items-center gap-2'> 
              <Input type="text"placeholder='Add Commnet.......'value={text}onChange={handleText}className='w-full  outline-none border border-gray-400 focus-visible:ring-transparent'/>
             <Button disabled={!text.trim()} onClick={sendMessageHandler} variant="outline" className="bg-blue-400 text-white">Send</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
