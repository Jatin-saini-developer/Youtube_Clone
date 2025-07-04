import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../constants/Contants'
import VideoCard from '../utils/VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  useEffect(()=>{
    getVideos()

  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
 
    setVideos(json.items)
    
  }
  return (
    <div className='flex  ml-7 pl-3  overflow-hidden flex-wrap'>
      {videos.map( (video) => ( 
         <Link key={video.id} to={'/watch?v=' + video.id}> <VideoCard key={video.id} info={video}/> </Link>
        )
      )}
    </div>
  )
}

export default VideoContainer