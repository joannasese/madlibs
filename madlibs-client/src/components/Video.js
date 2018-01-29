import React from 'react';
import { videos } from '../data';

//stateless component
const Video = () => {
  return (
    <div>
      <iframe title="random-video" width="560" height="315" src={videos[Math.floor(Math.random()*videos.length)]}></iframe>
    </div>

  )
}

export default Video;
