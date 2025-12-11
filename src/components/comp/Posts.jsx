import React from 'react'
import Post from './Post'
export default function Posts() {
  return (
    <div>
      {[1,2,3,4,5,6,7,8,9,10].map((item,index)=><Post key={index} />)}
    </div>
  )
}
