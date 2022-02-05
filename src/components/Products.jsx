import React, { Component } from 'react';
import Product from './functional/Product';
import ProductContext from "./../context/Products";


class Products extends Component {
    static contextType = ProductContext;
    render() {
        return (
            <>
            <button onClick={this.context.onReset} className='btn btn-primary'>Reset</button>
                {this.context.products.map((p, index) => (
                    <Product 
                        key={index} 
                        productName={p.productName} 
                        countNo={p.count} 
                        id={p.id} 
                    />
                ))}
            </>
        );
    }


}

export default Products;