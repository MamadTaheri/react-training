const increase = (value=1) => {
    return {type: "INCREASE_COUNTER", payload: value }
};
 
const decrease = (value=1) => {
    return {type: "DECREASE_COUNTER", payload: value}
};

export {increase, decrease};