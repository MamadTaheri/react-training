import { Component } from "react";
import Navbar from "./components/class/Navbar";
import Products from "./components/Products";
import ProductContext from "./context/Products";
class App extends Component {

    state = {
        products:[
            {id:1, count: 2, productName: 'laptop'},
            {id:2, count: 1, productName: 'phone'},
            {id:3, count: 4, productName: 'airpods'},
        ]
    }

    render() {
        return (
            <>
                <ProductContext.Provider 
                    value={{
                        products:this.state.products,
                        onDelete :this.handleDelete,
                        onIncrement :this.handleIncrement,
                        onDecrement :this.handleDecrement,
                        onReset :this.handleReset,
                    }}
                >
                <Navbar />
                <Products  />
                </ProductContext.Provider>
            </>
        );
    }

    handleDelete = (productId) => {
        const filteredState = this.state.products.filter(q => q.id !== productId);
        this.setState({products: filteredState})
    }

    handleIncrement = (productId) => {
        const updatedState = [...this.state.products];
        const index = updatedState.findIndex(q => q.id === productId);
        updatedState[index].count +=1 ;
        this.setState({products: updatedState});
    }

    handleDecrement = (productId) => {
        const updatedState = [...this.state.products];
        const index = updatedState.findIndex(q => q.id === productId);
        updatedState[index].count -=1 ;
        this.setState({products: updatedState});
    }

    handleReset = () => {
        const updatedState = this.state.products.map(q => {
            q.count = 0;
            return q;
        })
        this.setState({products: updatedState});
    }
}

export default App;