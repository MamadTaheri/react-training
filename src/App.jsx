import SplitScreen from "./components/SplitScreen";

const LeftHandComponent = ({ name }) => {
    return <h1 style={{backgroundColor: 'green'}}>{name}</h1>
}

const RighttHandComponent = ({ message }) => {
    return <h1 style={{backgroundColor: 'red'}}>{message}!</h1>
}

import {people} from "./data/people";
import {products} from "./data/products";


const App = () => {
    return (
        <SplitScreen leftWeight={1} rightWeight={3}>
            <LeftHandComponent name="Mamad" />
            <RighttHandComponent message="Helo" />
        </SplitScreen>
    );
};

export default App;