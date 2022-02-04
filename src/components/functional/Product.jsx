import React from 'react';
import { useState } from 'react';

const Product = ({productName, countNo, id, onDelete, onIncrement, onDecrement}) => {

    return (
        <div>
          <span className="m-2 text-info">{productName}</span>
          <span className="m-2 badge bg-primary">{format()}</span>
          <button onClick={handleIncrement} className="m-2 btn btn-sm btn-success">+</button>
          <button onClick={handleDecrement} className="m-2 btn btn-sm btn-warning">-</button>
          <button onClick={() => handleDelete(56)} className="m-2 btn btn-sm btn-danger">delete</button>
        </div>
      );

    function handleIncrement(){
      onIncrement(id)
    }
    
    function handleDecrement() {
        onDecrement(id)
    }
    
    function handleDelete(itemnumber){
        onDelete(id);
    }
    
  
    function format(){
      if (countNo === 0) {
        return "Zero";
      } else {
        return countNo;
      }
    }
};

export default Product;