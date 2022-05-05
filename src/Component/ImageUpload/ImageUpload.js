import React, { useState } from 'react';
import { storage } from '../../firebase';

function ImageUpload() {
   const [caption, setCaption]= useState('')
   const [image, setImage]= useState(null)

   const handleChange=(e)=>{
       if(e.target.file[0]){
            setImage(e.target.files[0])
       }
   }
   
   const handleUpload=()=>{
       const uploadTask= storage.ref(`image/${image.name}`).put(image);
   }

  return (
    <div>
        <form>
            <input type='text' placeholder='write caption here...' value={caption} onChange={(e)=>setCaption(e.target.value)}/>
            <input type='file' onChange={handleChange}/>
            <button type='submit' onClick={handleUpload}>Upload</button>
        </form>
    </div>
  )
}

export default ImageUpload