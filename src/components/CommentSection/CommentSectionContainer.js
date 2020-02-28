// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  return (
    <div>
      {props.comments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
      <CommentInput
        comments={comments}
        setComments={setComments}
        addComment={props.addComment}
        id={props.id}
      />
    </div>
  );
};

export default CommentSection;
