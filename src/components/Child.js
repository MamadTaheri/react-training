const Child = ({clickHandler}) => { 
    return (
        <div>
            <button onClick={() => clickHandler()}>Click Me!</button>
        </div>
    );
};

export default Child;