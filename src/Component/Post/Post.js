import React,{useEffect} from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import { auth ,db} from '../../firebase';
import { doc, getDoc } from "firebase/firestore";

function Post({userName, imageUrl, caption}) {
  // console.log(auth.currentUser.multiFactor.user.uid)

  const getData=async()=>{
    const docRef = doc(db, "Users", auth.currentUser.multiFactor.user.uid);
    const docSnap = await getDoc(docRef)
    // console.log(docSnap)
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className='post'>
        <div className='post__header'>
          <Avatar
            className='post__avatar'
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg" 
            />
            <h4 className='post__username'>{userName}</h4>
        </div>
        <img className='post__img'
            src={imageUrl} 
            alt='post' 
        />
        <p className='post__caption'><strong>{userName}:  </strong>{caption}</p>
    </div>
  )
}

export default Post