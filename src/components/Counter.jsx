import React from 'react';
import { connect } from 'react-redux';
import { increaseCounter } from "../redux/counter/counterAction"
const Counter = (props) => {
    return (
        <div>
            <h1>Counter - {props.counter}</h1>
            <button className='btn btn-primary' onClick={props.increaseCounter}>Increase</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);