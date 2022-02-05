import React, { Component } from 'react';
import ProductContext from "../../context/Products";

class Navbar extends Component {
    static contextType = ProductContext;
    componentDidUpdate(){
        console.log("Navbar - componentDidUpdate");
    }
    render() {
        console.log("Navbar - render");
        return (
           <nav className='navbar navbar-light bg-light'>
               <div className='container-fluid'>
                   <span className='navbar-brand'>
                       Navbar {this.calculateSum()}
                   </span>
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