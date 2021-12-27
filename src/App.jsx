import SplitScreen from "./components/SplitScreen";

const LeftHandComponent = () => {
    return <h1 style={{backgroundColor: 'green'}}>Left!</h1>
}

const RighttHandComponent = () => {
    return <h1 style={{backgroundColor: 'red'}}>Right!</h1>
}

const App = () => {
    return (
        <SplitScreen
            left={LeftHandComponent}
            right={RighttHandComponent}
        />
    );
};

export default App;