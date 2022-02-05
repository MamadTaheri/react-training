import React, { Component } from 'react';
import Product from './functional/Product';

class Products extends Component {

    render() {
        return (
            <>
            <button onClick={this.props.onReset} className='btn btn-primary'>Reset</button>
                {this.props.products.map((p, index) => (
                    <Product 
                        key={index} 
                        productName={p.productName} 
                        countNo={p.count} 
                        id={p.id} 
                        onDelete={this.props.onDelete} 
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                    />
                ))}
            </>
        );
    }


}

export default Products;