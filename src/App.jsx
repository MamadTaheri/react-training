import React from 'react';

const App = () => {
  return (
    <div className='ui container comments'>
      <div className="comment">
        <a href="/" className='avatar'>
          <img src="" alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className='author'>
            Mamad
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

export default App;