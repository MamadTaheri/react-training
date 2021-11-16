import React from "react";

const ProductInfo = ({info}) => {
  return (
    <div className="col-md-4">
      <div className="card bg-primary text-white">
        <div className="card-body">
          <h4>Code : {info.id}</h4>
          <h5>Title : {info.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
