import React, { Component } from "react";

class ProductListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 1,
      books: [
        { id: 101, title: "react learning" },
        { id: 102, title: "javascript sterp by step" },
      ],
    };
  }

  removeBook = (id) => {
    const temp = this.state.books.filter(q => q.id != id);  
    this.setState({books:[...temp]})
  }

  render() {
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
                  {this.state.books.map((book, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{book.id}</td>
                      <td>{book.title}</td>
                      <td>
                        <button onClick={() => this.removeBook(book.id)}  className="btn btn-danger btn-sm" >
                          remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductListClass;
