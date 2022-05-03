import React from 'react'
import './Post.css';

function Post({userName, imageUrl, caption}) {
  return (
    <div className='post'>
        <h4 className='post__username'>{userName}</h4>
        <img className='post__img'
            src={imageUrl} 
            alt='post' 
        />
        <p className='post__caption'><strong>{userName}:  </strong>{caption}</p>
    </div>
  )
}

export default Post