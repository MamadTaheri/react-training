const increaseCounterAction = (value=1) => {
    return {type: "INCREASE_COUNTER", payload: value}
};

const decreaseCounterAction = (value) => {
    return{type: "DECREASE_COUNTER", payload: value}
};

export {increaseCounterAction, decreaseCounterAction};