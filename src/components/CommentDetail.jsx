import React from "react";
import java from "../images/java.png";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={java} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          Mamad
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
