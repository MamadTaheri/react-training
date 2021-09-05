import React from 'react';
import { increase } from '../redux/counter/counterAction';
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <div>
            <h1>Counter - {props.counter} </h1>
            <button onClick={props.increase }>Increase</button>
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
        increase: () => dispatch(increase())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);