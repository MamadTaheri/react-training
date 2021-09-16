import React, { useEffect, useState } from "react";
import axios from "axios";
import loader from '../asset/gif/loading.gif'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchDataFromServer = async () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => setPosts(response.data));
    
  };

  useEffect(() => {
    setTimeout(fetchDataFromServer, 1000);
  }, []);

  return (
    <div>
      {posts.length ? (
        <ul className="d-flex flex-column text-center col-md-6">
          {posts.map(post => <li className="bg-success text-white m-1" key={post.id}>{post.title}</li>)}
        </ul>
      ) : (
        <div className="text-center p-5 m-5 ">
            <img src={loader} alt="isLoading" />
        </div>
      )}
    </div>
  );
};

export default Posts;
