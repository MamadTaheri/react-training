import { combineReducers } from "redux";

import counterReducer from "./counter/counterReducer";
import numberReducer from "./number/numberReducer";

const rootReducer = combineReducers({
    numberStateObject: numberReducer,
    counterStateObject: counterReducer
})

export default rootReducer;