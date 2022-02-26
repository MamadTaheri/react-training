import React from "react";
import CommentDetail from "./components/CommentDetail";
import java from "./images/java.png";
import redux from "./images/redux.png";
import Typescript from "./images/Typescript.png";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="mamad" avatar={java} timeAgo="1 Hours Ago" content="Nice blog post" />
      <CommentDetail author="ali" avatar={redux} timeAgo="3 Hours Ago" content="I like violin" />
      <CommentDetail author="zahra" avatar={Typescript} timeAgo="4 Hours Ago" content="I like driving" />
    </div>
  );
};

export default App;
