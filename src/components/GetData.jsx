import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  isLoading: false,
  post: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        isLoading: false,
        post: action.payload,
        error: "",
      };
    case "FAILURE":
      return {
        isLoading: false,
        post: {},
        error: "An error has occurred",
      };
    default:
      return state;
  }
};

const GetData = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) =>
        dispatch({
          type: "SUCCESS",
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: "FAILURE",
        })
      );
  }, []);

  return <div>
        {data.isLoading ? "Loading" : data.post.body}
        {data.error && data.error}
      </div>;
};

export default GetData;
