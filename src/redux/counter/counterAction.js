import { actionConstants } from "../actionConstants"

const increaseCounter = (value = 1) => {
    return {
        type: actionConstants.INCREASE_COUNTER,
        payload: value
    }
}
const decreaseCounter = (value = 1) => {
    return {
        type: actionConstants.DECREASE_COUNTER,
        payload: value
    }
}

export { increaseCounter, decreaseCounter };