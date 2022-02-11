import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
                    
    const account = useSelector((state) => state.account);

    console.log(account)

    return (
        <div className='container border bordeer-primary'>
            
        </div>
    );
};

export default App;