import React from 'react'
import japanVedio from '../../assets/videos/Trailer.mp4'
import ReactPlayer from 'react-player';
import './Video.css'


function Video() {
  return (
    <div className="video-container">
      <ReactPlayer url={japanVedio} className="react-player" controls={false} playing loop auntoPlay={true} muted={true}  width="100%" height="100%" />
    </div>
  )
}

export default Video