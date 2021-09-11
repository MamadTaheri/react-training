const increaseCounterAction = () => {
    return {type: "INCREASE_COUNTER"}
};

const decreaseCounterAction = () => {
    return{type: "DECREASE_COUNTER"}
};

export {increaseCounterAction, decreaseCounterAction};