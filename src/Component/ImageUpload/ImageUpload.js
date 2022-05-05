import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { db, storage } from '../../firebase';

function ImageUpload() {
   const [caption, setCaption]= useState('')
   const [image, setImage]= useState(null)
   const [progress, setProgress]=useState(0)

   const handleChange=(e)=>{
       if(e.target.files[0]){
            setImage(e.target.files[0])
       }
   }
   
   const handleUpload=(event)=>{
       event.preventDefault();
       const uploadTask= storage.ref(`images/${image.name}`).put(image);

       uploadTask.on(
           "state_changed",
           (snapshot)=>{
               const progress= Math.round(
                   (snapshot.bytesTransferred/snapshot.totalBytes)*100
               );
               setProgress(progress);
           },
           (error)=>{
               console.log(error);
               alert(error.message);
           },
           ()=>{
               storage
               .ref("images")
               .child(image.name)
               .getDownloadURL()
               .then(url=>{
                   db.collection("posts").add({
                       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                       caption: caption,
                       imageUrl: url
                   });
                   setProgress(0);
                   setCaption('');
                   setImage(null);
               });
           }
       )
   }

  return (
    <div>
        <form>
            <progress value={progress} max='100'/>
            <input type='text' placeholder='write caption here...' value={caption} onChange={(e)=>setCaption(e.target.value)}/>
            <input type='file' onChange={handleChange}/>
            <button type='submit' onClick={handleUpload}>Upload</button>
        </form>
    </div>
  )
}

export default ImageUpload