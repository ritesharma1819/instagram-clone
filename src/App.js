import React,{useState} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Post from './Component/Post/Post';

function App() {
  const [posts, setPosts]=useState([
    {
      userName: 'Sheldon' ,
      imageUrl: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' ,
      caption: 'The main character of big bang theory'
    },
    {
      userName: 'Leonard',
      imageUrl: 'https://wallpapercave.com/wp/MBlYYUf.jpg',
      caption: 'The second main character of big bang theory'
    },
    {
      userName: 'Rajesh',
      imageUrl: 'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      caption: 'The third main character of big bang theory'
    },
    {
      userName: 'Howard',
      imageUrl: 'https://www.nestle.com/sites/default/files/styles/da_vinci_header_hero_desktop/public/2022-02/sustainability-nature-forest-river-article-header-fw.jpg?h=a612ed85&itok=1mqqgg1L',
      caption: 'The fourth main character of big bang theory'
    }
  ])
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
