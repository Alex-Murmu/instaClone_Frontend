// src/components/outlates/Profile.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Settings, LayoutGrid, Square, Bookmark } from 'lucide-react'
import ProfilePostCard from '../comp/ProfilePostCard' // Import the new component

export default function Profile() {
  const { user } = useSelector(store => store.auth);

  // Dummy Data for Post Grid
  const dummyPosts = Array(15).fill({ id: 1, likes: 100, comments: 20 });
  
  // Hardcoded profile stats for UI demonstration
  const stats = { posts: 15, followers: '1.2K', following: 350 };
  const bio = "Building an Instagram clone with React and Tailwind. 💻 | Full-Stack Developer.";
  const website = "https://yourwebsite.com";

  // Navigation tabs for Posts, Reels, Tagged (Web version style)
  const tabs = [
    { name: 'POSTS', icon: LayoutGrid, count: stats.posts },
    { name: 'SAVED', icon: Bookmark, count: 0 },
    { name: 'TAGGED', icon: Square, count: 0 },
  ];
  
  const [activeTab, setActiveTab] = React.useState('POSTS'); // State for active tab

  return (
    <div className='w-full md:ml-64 lg:max-w-4xl pt-10 px-4 md:px-6'>
      
      {/* 1. Profile Header Section (Desktop Layout) */}
      <header className='flex flex-col md:flex-row items-start md:items-center border-b pb-10 mb-10'>
        
        {/* Left: Avatar */}
        <div className='w-full md:w-1/3 flex justify-center md:justify-start'>
          <Avatar className="size-24 md:size-36">
            <AvatarImage src={user?.profilePicture || 'src/assets/as.jpg'} />
            <AvatarFallback className="text-4xl">
                {user?.username ? user.username[0].toUpperCase() : 'U'}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Right: User Info, Stats, Bio */}
        <div className='w-full md:w-2/3 mt-6 md:mt-0 md:pl-10'>
          
          {/* Username and Buttons */}
          <div className='flex items-center space-x-6 mb-4'>
            <h1 className='text-xl md:text-2xl font-light'>{user?.username || 'user_placeholder'}</h1>
            <Button variant="outline" size="sm" className="font-semibold">
              Edit Profile
            </Button>
            <Settings className='size-6 cursor-pointer text-gray-500 hover:text-gray-700' />
          </div>

          {/* Stats (Posts, Followers, Following) */}
          <div className='hidden md:flex space-x-10 mb-4'>
            <span className='font-medium text-base'>
              <span className='font-bold'>{stats.posts}</span> posts
            </span>
            <span className='font-medium text-base'>
              <span className='font-bold'>{stats.followers}</span> followers
            </span>
            <span className='font-medium text-base'>
              <span className='font-bold'>{stats.following}</span> following
            </span>
          </div>

          {/* Name and Bio */}
          <div className='text-sm space-y-1 hidden md:block'>
            <p className='font-semibold'>{user?.fullName || 'User Name'}</p>
            <p>{bio}</p>
            <a href={website} target="_blank" rel="noopener noreferrer" className='text-blue-600 font-semibold'>{website}</a>
          </div>
        </div>

        {/* Mobile Stats (visible below the header) */}
        <div className='md:hidden w-full flex justify-around border-t mt-4 pt-4'>
            {Object.entries(stats).map(([key, value]) => (
                <div key={key} className='flex flex-col items-center'>
                    <span className='font-bold'>{value}</span>
                    <span className='text-xs text-gray-500'>{key}</span>
                </div>
            ))}
        </div>
      </header>

      {/* 2. Post Tabs Navigation */}
      <div className='flex justify-center border-t border-gray-300'>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex items-center space-x-2 py-3 px-6 cursor-pointer text-xs font-semibold tracking-widest ${
              activeTab === tab.name
                ? 'border-t border-black text-black -mt-px' // Active tab styling
                : 'text-gray-400 hover:text-gray-600'
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <tab.icon className='size-4' />
            <span className='hidden md:inline'>{tab.name}</span>
          </div>
        ))}
      </div>
      
      {/* 3. Post Grid Section */}
      <div className='grid grid-cols-3 gap-1 md:gap-6 mt-6'>
        {/* Map over posts to create the 3-column grid */}
        {dummyPosts.map((post, index) => (
          <ProfilePostCard key={index} post={post} />
        ))}
        
        {/* Placeholder for less than 3 columns */}
        <div className='hidden md:block'></div>
        <div className='hidden md:block'></div>
      </div>
    </div>
  )
}