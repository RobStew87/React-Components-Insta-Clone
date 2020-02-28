//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data

const PostsPage = ({ posts, addLike, addComment, userInfo }) => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {posts.map((post, i) => {
        return (
          <Post
            key={i}
            post={post}
            addLike={addLike}
            addComment={addComment}
            userInfo={userInfo}
          />
        );
      })}
    </div>
  );
};

export default PostsPage;
