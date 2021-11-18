import React, {Component} from 'react';

class Counter2 extends Component {
    componentDidMount() {
        console.log("Cpounter2 componentDidMount")
    }

    componentDidUpdate(){
        console.log("Counter2 componentDidUpdate")
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.counter === this.props.counter){
            return false;
        }
        return true;
    }


    render() {
        return (
            <div>
                Counter2 : {this.props.counter}
            </div>
        );
    }
}

export default Counter2;