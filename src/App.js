import React,{useState ,useEffect} from 'react';
import './App.css';
import SignIn from './Component/SignIn/SignIn';
import Header from './Component/Header/Header';
import Post from './Component/Post/Post';
import {db} from './firebase';
import ImageUpload from './Component/ImageUpload/ImageUpload';

function App() {
  const [posts, setPosts]=useState([])
  const [route, setRoute]=useState('signIn')

useEffect(()=>{
      db.collection("posts").onSnapshot(snapshot=>{
        setPosts(snapshot.docs.map(doc=>({
          id: doc.id,
          post: doc.data()
        })))
      })
})

const isRouteChange=(route)=>{
  setRoute(route);
}

  return (
    <div className="App">
     { route==='signIn'?
      <SignIn isRouteChange={isRouteChange}/> :
      <div>
        <Header />
        <ImageUpload />
        {
          posts.map(({post,id})=>(
            <Post key={id} userName={post.userName} imageUrl={post.imageUrl} caption={post.caption} />
          ))
        }
      </div>
      }
    </div>
  );
}

export default App;
