const increase = () => {
    return {type: "INCREASE_COUNTER"}
};
 
const decrease = () => {
    return {type: "DECREASE_COUNTER"}
};

export {increase, decrease};