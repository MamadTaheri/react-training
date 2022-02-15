import { actionConstants } from "../actionConstants"

export const increaseCounter = () => {
    return {
        type: actionConstants.INCREASE_COUNTER
    }
}