import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [posts, setPosts] = useState([]);

  const fetchDataFromServer = async () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => setPosts(response.data));
    
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  return (
    <div>
      {posts.length ? (
        <ul className="d-flex flex-column text-center col-md-6">
          {posts.map(post => <li className="bg-success text-white m-1" key={post.id}>{post.title}</li>)}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Main;
