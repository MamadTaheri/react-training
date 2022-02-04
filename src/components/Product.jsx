import { Component } from "react";

class Product extends Component {
  count = 3;
  list = ["item one", "item two", "item three"];
  mappedList = this.list.map((item) => <li key={item}>{item}</li>);
  render() {
    return (
      <>
        {this.count ? (
          <>
            <span className="m-2 text-info">product name</span>
            <span className="m-2 badge bg-primary">{this.format()}</span>
            <span className="m-2 badge bg-secondary">
              {this.count === 0 ? "zerooooo" : this.count}
            </span>
            <button onClick={this.handleIncrement.bind(this)} className="m-2 btn btn-sm btn-success">+</button>
            <button onClick={this.handleDecrement} className="m-2 btn btn-sm btn-warning">-</button>
            <button onClick={() => this.handleDelete(56)} className="m-2 btn btn-sm btn-danger">delete</button>
            <ul>{this.mappedList}</ul>
            <span style={{border:"2px solid blue", borderRadius:"50%", padding:"8px"}}>Salam</span>
          </>
        ) : <p>Zero found</p>}
      </>
    );
  }

  handleIncrement(){
      console.log('increment', this)
  }
  
  handleDecrement = () => {
      console.log('decrement', this)
  }
  
  handleDelete(itemnumber){
      console.log(itemnumber)
  }
  

  format() {
    if (this.count == 0) {
      return "Zero";
    } else {
      return this.count;
    }
  }
}

export default Product;
