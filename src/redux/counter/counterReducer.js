const initiallState = {
    counter: 0
}

const reducer = (state= initiallState, action) => {
    switch(action.type) {
        case "INCREASE":
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state;
    }
}

export default reducer