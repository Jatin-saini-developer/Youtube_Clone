import React from 'react'
import store from '../utils/store'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)


  if (!isMenuOpen) return null ;
      return (
    <div className='bg-gray-100 w-[196px]  text-black '>
        <div className='flex w-[196px] flex-col'>
            <Link to='/' className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm' >Home</Link >
            <button className='px-7 py-2 my- 1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Shorts</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Subscription</button>
        </div>
        <hr />

        <div className='flex flex-col'>
            <button>You</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>History</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Playlists</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Your Videos</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Watch later</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Liked videos</button>
        </div>
        <hr />


        <div className='flex flex-col'>
          <button className='hover:bg-gray-200'>Explore</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Trending</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Shopping</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Music</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Movies</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Live</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Gaming</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>News</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Sports</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Courses</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Fashion & Beauty</button>
            <button className='px-7 py-2 my-1 hover:bg-gray-200 hover:font-medium transition whitespace-nowrap text-left rounded-lg text-sm'>Podcasts</button>


        </div>
    </div>
  )
}

export default SideBar