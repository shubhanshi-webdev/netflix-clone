import React from 'react'

const VideoTitle = ({data}) => {
    // console.log(data);
    const {original_title, overview} = data;
  return (
    <div className='movieDataContainer container'>
        <p className='title'>{original_title}</p>
        <span className='description'>{overview}</span>
    </div>
  )
}

export default VideoTitle