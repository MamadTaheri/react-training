import React from 'react';
import { useState } from 'react';

const Product = ({productName, countNo, children}) => {

    const [count, setCount] = useState(countNo);

    return (
        <div>
          <span className="m-2 text-info">{productName}</span>
          <span className="m-2 badge bg-primary">{format()}</span>
          <button onClick={handleIncrement} className="m-2 btn btn-sm btn-success">+</button>
          <button onClick={handleDecrement} className="m-2 btn btn-sm btn-warning">-</button>
          <button onClick={() => handleDelete(56)} className="m-2 btn btn-sm btn-danger">delete</button>
          {children}
        </div>
      );

    function handleIncrement(){
        setCount(count + 1)
    }
    
    function handleDecrement() {
        setCount(count - 1)
    }
    
    function handleDelete(itemnumber){
        console.log(itemnumber)
    }
    
  
    function format(){
      if (count === 0) {
        return "Zero";
      } else {
        return count;
      }
    }
};

export default Product;