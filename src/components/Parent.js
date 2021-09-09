import Child from "./Child"

const Parent = ({clickHandler}) => {
    return (
        <div>
            <Child clickHandler={clickHandler} />
        </div>
    );
};

export default Parent;