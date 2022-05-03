import React from 'react'
import './Post.css';

function Post() {
  return (
    <div className='post'>
        <h4 className='post__username'>Username</h4>
        <img className='post__img'
            src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' 
            alt='post' 
        />
        <p className='post__caption'><strong>Caption:  </strong>Hey there i am making instagram clone!</p>
    </div>
  )
}

export default Post