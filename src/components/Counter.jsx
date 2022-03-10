import React from 'react';
import { increaseCounter } from "../redux/counter/counterAction";
import {connect } from "react-redux";

const Counter = (props) => {
    return (
        <div>
            <h1>Counter - {props.counterState} </h1>
            <button onClick={props.increaseCounter}>Increase</button>
        </div>
    );
};

const mapStateToProps = globalState => {
    return {
        counterState: globalState.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);