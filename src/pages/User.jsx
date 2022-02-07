import axios from "axios";
import React,{ useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

const User = (props) => {
  const [user, setUser] = useState({});
  const firstName = useRef(null);
  console.log(queryString.parse(props.location.search))
  const baseURL = "https://reqres.in/api/users";

  useEffect(() => { 
    (async () => {
      const response = await axios.get(`${baseURL}/${props.match.params.id}`);
      setUser(response.data.data);
      console.log(firstName.current);
    })()
   }, [props.match.params.id]);

  return (
    <>
      <img src={user.avatar} style={{ borderRadius: "50%", width: "100px" }} alt="" />
      <Link to={`/users/${user.id}`}>
        <h4 ref={firstName}>{user.first_name} {user.last_name}</h4>
      </Link>
      <h5>{user.email}</h5>
      <button onClick={() => {props.history.push('/users')}} className="btn btn-info mt-3">Users</button>
    </>
  );
};

export default User;
