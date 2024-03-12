import React from 'react'

function VideoCard({info}) {
    const { snippet , statistics} = info;
    const {channelTitle , title , thumbnails} = snippet;
  return (
    
    <div>
        <img src={info.snippet.thumbnails.medium.url} alt="thumbnail" width="500" height="400" />
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard