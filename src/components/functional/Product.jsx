import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ProductContext from '../../context/Products';

const Product = ({productName, countNo, id}) => {
    const productContext = useContext(ProductContext);
    console.log("Product - render");
    useEffect(() => {
        console.log("Product - useEffect");
        return () => {
          console.log("Product - Unmount")
        }
    }, [])
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
      productContext.onIncrement(id)
    }
    
    function handleDecrement() {
      productContext.onDecrement(id)
    }
    
    function handleDelete(itemnumber){
      productContext.onDelete(id);
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