import React from 'react';
import List from "./components/List";

const tahoe_peak = [
    { name: "Freel Peak", elevation: 10891},
    { name: "Monument Peak", elevation: 10067},
    { name: "Pyramid Peak", elevation: 9983},
    { name: "Mt. Tallec", elevation: 9735},
];

const App = () => {
    return (
        <List
            data={tahoe_peak}
            renderEmpty={<p>This list is empty</p>}
            renderItem={item => (
                <>
                    {item.name} - {item.elevation.toLocaleString()}ft
                </>
            )}
        />
    );
};

export default App;