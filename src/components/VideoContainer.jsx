import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

function VideoContainer() {
  const [videos, setVideoes] = useState([]);

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json();
    setVideoes(json.items)
  }
  return (
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/rLDYzqV9Lno?si=GGltkAvQnyVpSZUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='flex flex-wrap'>
      {videos.map(video=>(
        <Link to={"/watch?v="+video.id}>
        <VideoCard key={video.id} info={video} />
        </Link>
      ))}
      </div>
    </div>
  )
}

export default VideoContainer