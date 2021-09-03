import React, { useEffect, useState } from "react";

import { getProducts } from "../services/api";

const ProductContextProvider = () => {
    
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };

    fetchAPI();
  }, []);

  return <div></div>;
};

export default ProductContextProvider;
