import React,{useState ,useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import Header from './Component/Header/Header';
import Post from './Component/Post/Post';
import {db} from './firebase';
import ImageUpload from './Component/ImageUpload/ImageUpload';

function App() {
  
  const [posts, setPosts]=useState([])
 
useEffect(()=>{
      db.collection("posts").onSnapshot(snapshot=>{
        setPosts(snapshot.docs.map(doc=>({
          id: doc.id,
          post: doc.data()
        })))
      })
},[])



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn /> } />
        <Route path='signup' element={<SignUp /> } />
        <Route path='post' element={<div>
              <Header />
              <ImageUpload />
              {
                posts.map(({post,id})=>(
                  <Post key={id} userName={post.userName} imageUrl={post.imageUrl} caption={post.caption} />
                ))
              }
            </div>} />
      </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
