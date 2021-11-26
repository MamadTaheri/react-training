import React from 'react';
import List from "./components/List";
import faker from 'faker';
import logo from '../src/assets/logo.png'
import {FixedSizeList} from "react-window";

const bigList = [...Array(5000)].map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: logo
}));

const App = () => {
    const renderRow = ({index, style}) => (
        <div style={{...style, ...{display: "flex"} }}>
            <img
                src={bigList[index].avatar}
                alt={bigList[index].name}
                width={50}
            />
            <p>
                {bigList[index].name} - {bigList[index].email}
            </p>
        </div>
    );

    // const renderItem = item => (
    //     <div style={{ display: "flex"}}>
    //         <img src={item.avatar} alt={item.name} width={50} />
    //         <p>
    //             {item.name} - {item.email}
    //         </p>
    //     </div>
    // );
    return (
        <FixedSizeList
            height={window.innerHeight -20}
            width={400 }
            itemCount={bigList.length}
            itemSize={50}
        >
            {renderRow}
        </FixedSizeList>
    );
};

export default App;