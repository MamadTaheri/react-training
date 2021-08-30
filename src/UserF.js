import React from 'react';

// const UserF = (props) => {
//     const {name, age} = props
//     return (
//         <div>
//             <p>Hi. I am {name} and I am {age} years old</p>
//         </div>
//     );
// };

const UserF = ({name, age}) => {
    return (
        <div>
            <p>Hi. I am {name} and I am {age} years old</p>
        </div>
    );
};

export default UserF;