import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import shopIcons from '../../assets/shop.svg'

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <div>
              <Link to="/products">Products</Link> 
              <div>
                 <Link to="/cart"><img src={shopIcons} alt="shop" /></Link>
                 <span>{state.itemsCounter}</span>
              </div>
            </div>
        </div>
    );
};

export default Navbar;