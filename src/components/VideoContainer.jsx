import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';

function VideoContainer() {
  const [videos, setVideoes] = useState([]);

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json();
    console.log(json.items)
    setVideoes(json.items)
  }
  return (
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/rLDYzqV9Lno?si=GGltkAvQnyVpSZUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <VideoCard info={videos[0]}/>
    </div>
  )
}

export default VideoContainer