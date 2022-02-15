import { actionConstants } from "../actionConstants"

const initialState = {
    number: 5
}

const numberReducer = (state = initialState, action) => {
    switch(action.type){
        case actionConstants.INCREASE_NUMBER:
            return {
                ...state,
                number: state.number + 1
            }
        case actionConstants.DECREASE_NUMBER:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state;
    }
}

export default numberReducer