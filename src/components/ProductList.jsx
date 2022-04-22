import React, { Component } from "react";
import { getAll } from "../stateManagement/actions/productActions";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <h1>Product List</h1>
        <table className="table table-stripped table-border table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {
                  this.props.products.map(item => 
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>----</td>
                    </tr>)
              }
          </tbody>
        </table>
      </div>
    );
  }
}

// state === store

const mapStateToProps = state => ({
    products: state.productState.items
})

export default connect(mapStateToProps)(ProductList);