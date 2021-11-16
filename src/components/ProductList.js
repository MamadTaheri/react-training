import React, { useState } from "react";
import ProductInfo from "./ProductInfo";

const ProductList = () => {
  const [books, setBooks] = useState([
    { id: 101, title: "react learning" },
    { id: 102, title: "javascript sterp by step" },
  ]);

  const removeBook = (id) => {
    const temp = books.filter((q) => q.id !== id);
    setBooks([...temp]);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Product List</h1>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>id</th>
                  <th>title</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>
                      <button
                        onClick={() => removeBook(book.id)}
                        className="btn btn-danger btn-sm"
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
            <h2>List view Mode</h2>
            <div className="row">
              {books.map((book) => <ProductInfo key={book.id} info={book} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
