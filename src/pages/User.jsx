import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  const [user, setUser] = useState({});

  const baseURL = "https://reqres.in/api/users";

  useEffect(async () => {
    const response = await axios.get(`${baseURL}/${props.match.params.id}`);
    setUser(response.data.data);
  }, []);

  console.log(props.match.params);
  return (
    <>
      <img src={user.avatar} style={{ borderRadius: "50%", width: "100px" }} alt="" />
      <Link to={`/users/${user.id}`}>
        <h4>  {user.first_name} {user.last_name} </h4>
      </Link>
      <h5>{user.email}</h5>
    </>
  );
};

export default User;
