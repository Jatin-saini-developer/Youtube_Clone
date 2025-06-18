import React from 'react';

const VideoCard = ({ info }) => {
 
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-72' >
      <img  className='rounded-lg' src={thumbnails.medium.url} alt="thumbnails" />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
