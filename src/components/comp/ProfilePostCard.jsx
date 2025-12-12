// src/components/comp/ProfilePostCard.jsx
import { Heart, MessageCircle } from 'lucide-react'
import React from 'react'
import Pic from "@/assets/vietnam.jpg" // Using an existing asset

// This component represents a single image in the 3-column grid
export default function ProfilePostCard({ post }) {
  // Replace with actual post data once connected to API
  const likes = post?.likes || 123;
  const comments = post?.comments || 45;

  return (
    <div className='group relative aspect-square cursor-pointer overflow-hidden'>
      {/* Post Image (ensures a perfect square using aspect-square) */}
      <img
        src={Pic} // Replace with post.image
        alt="Post"
        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]'
      />

      {/* Overlay on Hover (Hidden by default, visible on group-hover) */}
      <div className='absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center space-x-6'>
        {/* Likes Count */}
        <div className='flex items-center text-white font-bold text-lg'>
          <Heart fill='white' className='size-5 mr-2' />
          <span>{likes}</span>
        </div>
        {/* Comments Count */}
        <div className='flex items-center text-white font-bold text-lg'>
          <MessageCircle fill='white' className='size-5 mr-2' />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  )
}