import React, {PureComponent} from 'react';

class Counter extends PureComponent {
    componentDidMount() {
        console.log("Cpounter componentDidMount")
    }

    componentDidUpdate(){
        console.log("Counter componentDidUpdate")
    }


    render() {
        return (
            <div>
                Counter : {this.props.counter}
            </div>
        );
    }
}

export default Counter;