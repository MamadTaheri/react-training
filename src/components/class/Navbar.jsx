import React, { Component } from 'react';
import ProductContext from "../../context/Products";

class Navbar extends Component {
    static contextType = ProductContext;
    render() {
        return (
           <nav className='navbar navbar-light bg-light'>
               <div className='container-fluid'>
                   <a href="#" className='navbar-brand'>
                       Navbar {this.calculateSum()}
                   </a>
               </div>
           </nav>
        );
    }
    calculateSum = () => {
        let sum = 0;
        this.context.products.forEach(q => {
            sum += q.count;
        });
        return sum;
    }
}

export default Navbar;