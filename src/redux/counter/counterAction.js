import { actionConstants } from "../actionConstants"

const increaseCounter = () => {
    return {
        type: actionConstants.INCREASE_COUNTER
    }
}
const decreaseCounter = () => {
    return {
        type: actionConstants.DECREASE_COUNTER
    }
}

export { increaseCounter, decreaseCounter };