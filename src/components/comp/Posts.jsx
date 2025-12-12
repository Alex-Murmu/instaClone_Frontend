import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios';
export default function Posts() {
  const [post,setPost] = useState([]);

  const fetchPost = async()=>{
    const response = await axios.get("http://localhost:8000/api/post/posts",{
      withCredentials:true,
      headers:{"Content-Type":"Application/json"}
    })

    const data = response.data.posts;
    console.log(data);
  }
  useEffect(()=>{
      fetchPost();
  },[])
  return (
    <div>
      {[1,2,3,4,5,6,7,8,9,10].map((item,index)=><Post key={index} />)}
    </div>
  )
}
