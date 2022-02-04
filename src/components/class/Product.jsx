import { Component } from "react";

class Product extends Component {
  state = {
      count: 0
  }
  render() {
    return (
      <>
        <span className="m-2 text-info">laptop</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button onClick={this.handleIncrement.bind(this)} className="m-2 btn btn-sm btn-success">+</button>
        <button onClick={this.handleDecrement} className="m-2 btn btn-sm btn-warning">-</button>
        <button onClick={() => this.handleDelete(56)} className="m-2 btn btn-sm btn-danger">delete</button>
      </>
    );
  }

  handleIncrement(){
      const {count} = this.state;
      this.setState({count: count + 1})
  }
  
  handleDecrement = () => {
    const {count} = this.state;
    this.setState({count: count - 1})
  }
  
  handleDelete(itemnumber){
      console.log(itemnumber)
  }
  

  format() {
    if (this.state.count === 0) {
      return "Zero";
    } else {
      return this.state.count;
    }
  }
}

export default Product;
