import React, { Component } from "react";
import { getAllProducts } from "../stateManagement/actions/ProductThunkActions";
import { connect } from "react-redux";

class ProductListWithThunk extends Component {
  componentDidMount() {
    this.props.getAll();
  }
  render() {
    return (
      <div className="container">
        <h1>Product List With Thunk</h1>
        {this.props.isLoading ? <div>Loading data from Server ...</div> : null}
        {this.props.message ? <div>{this.props.message}</div> : null}
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
            {this.props.products.map((item) => (
              <tr key={item.productId}>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.unitPrice}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.props.removeProduct(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// state === store

const mapStateToProps = (state) => ({
  products: state.productThunkState.items,
  isLoading: state.productThunkState.isLoading,
  message: state.productThunkState.message,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => getAllProducts(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListWithThunk);
