import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { data, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'


export default function Signup() {
const [userInputs,setUserInputs] = useState({username:"",email:"",password:""});
const [loading,setLoading] = useState(false);
const navigate = useNavigate();

  const InputHandler = (e)=>{
    setUserInputs({...userInputs,[e.target.name]:e.target.value})
  }
  
 const SingupHandler = async(e)=>{
  setLoading(true);
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:8000/api/auth/register",userInputs,{
      withCredentials:true,
      headers:{"Content-Type":"Application/json"}
    })
    toast.success(response.data.message)
    navigate("/login")
    setUserInputs({username:"",email:"",password:""})
  } catch (error) {
    console.log(error.response.data)

    toast.error(error.response.data.message)
  }
    
  
 }
  return (
    <div className='flex items-center w-screen h-screen justify-center'>
      <div className='w-80 md:w-90 shadow-lg p-10 rounded-2xl flex flex-col gap-2'>
        <div>
          <h1 className='text-center font-bold text-2xl mb-4'>LOGO</h1>
          <p className='flex-wrap text-center'>Sigup To see Photos and Videos of Your Freind</p>
        </div>
        <div>
          <Label className="py-2 text-md">Username</Label>
          <Input type="text" name="username"  value={userInputs.username} onChange={InputHandler}  className="focus-visible:ring-transparent " />
        </div>
         <div>
          <Label className="py-2 text-md">Email</Label>
          <Input type="email" name="email" value={userInputs.email} onChange={InputHandler}  className="focus-visible:ring-transparent " />
        </div>
         <div>
          <Label className="py-2 text-md">Password</Label>
          <Input type="password" name="password" value={userInputs.password} onChange={InputHandler}  className="focus-visible:ring-transparent " />
        </div>
        <div className='flex justify-center w-full mt-2'>
          <Button onClick={SingupHandler} className="w-full">Singup</Button>
        </div>
        <div className='flex justify-between items-center text-sm'>
          <div className=' font-light'>if allReady have an Account please</div>
         <Link to={"/login"} className='text-blue-500'>Signin</Link>
        </div>
      </div>
    </div>
  )
}
