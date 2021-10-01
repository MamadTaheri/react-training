import React, { useState } from 'react';

const Form = () => {

    const [data, setData] = useState({name: "", age: ""})

    return (
        <div>
            <input type="text" value={data.name} onChange={e => setData({...data, name:e.target.value})} />
            <input type="text" value={data.age} onChange={e => setData({...data, age:e.target.value})} />
            <h1 className="">name : {data.name}</h1>
            <h1 className="">age : {data.age}</h1>
        </div>
    );
};

export default Form;