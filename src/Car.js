import React from "react";

const Car = (props) => {
  return (
    <>
      <p>
        The model of car is {props.model} and it's color is
        {props.color}
      </p>
      {props.children ? <span>{props.children}</span> : <h5>Not</h5>}
    </>
  );
};

export default Car;
