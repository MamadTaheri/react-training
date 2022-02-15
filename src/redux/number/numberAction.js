import { actionConstants } from "../actionConstants"

const increaseNumber = () => {
    return {
        type: actionConstants.INCREASE_NUMBER
    }
}

const decreaseNumber = () => {
    return {
        type: actionConstants.DECREASE_NUMBER
    }
}

export {increaseNumber, decreaseNumber};