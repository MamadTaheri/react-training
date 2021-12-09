import React, {Component} from 'react';

class Counter extends Component {
    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <div>
                <h2>Count: </h2>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
            </div>
        );
    }
}

export default Counter;