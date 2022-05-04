import React,{useState ,useEffect} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Post from './Component/Post/Post';

function App() {
  const [posts, setPosts]=useState([])

  return (
    <div className="App">
      <Header />
      {
        posts.map((post,i)=>(
          <Post key={i} userName={post.userName} imageUrl={post.imageUrl} caption={post.caption} />
        ))
      }
    </div>
  );
}

export default App;
