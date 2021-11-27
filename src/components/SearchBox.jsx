import React from 'react';

const SearchBox = ({inputHandler}) => {

    const changeHandler = (e) => {
        inputHandler(e.target.value);
    }

    return (
        <div className="p-2">
            <input
                type="text"
                placeholder="login"
                onChange={changeHandler}
            />
        </div>
    );
};

export default SearchBox;