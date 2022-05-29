import { Avatar } from "@mui/material";
import React from "react";
import "./index.css";

const Post = ({ userName, imageUrl, caption }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <h4 className="post__username">{userName}</h4>
      </div>
      <img className="post__img" src={imageUrl} alt="post" />
      <p className="post__caption">
        <strong>{userName}: </strong>
        {caption}
      </p>
    </div>
  );
};

export default Post;
