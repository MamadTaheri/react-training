import React from 'react';
import CommentDetail from './components/CommentDetail';
import java from "./images/java.png";
import redux from "./images/redux.png";
import Typescript from "./images/Typescript.png";

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

export default App;