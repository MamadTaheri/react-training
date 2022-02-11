import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux';

const App = () => {

    const account = useSelector((state) => state.account);
    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className='container border bordeer-primary'>
            <h1>{account}</h1>
            <button onClick={() => depositMoney(1000)}>Deposit</button>
            <button onClick={() => withdrawMoney(500)}>Withdraw</button>
        </div>
    );
};

export default App;