import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import ImageUpload from "./Component/ImageUpload";
import Post from "./Component/Post";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import { db } from "./firebase";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="post"
            element={
              <div>
                <Header />
                <ImageUpload />
                {posts.map(({ post, id }) => (
                  <Post
                    key={id}
                    userName={post.userName}
                    imageUrl={post.imageUrl}
                    caption={post.caption}
                  />
                ))}
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
