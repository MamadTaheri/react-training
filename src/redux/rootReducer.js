import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import numberReducer from "./number/numberReducer";
import userReducer from "./users/usersReducer";

const rootReducer = combineReducers({
    numberState: numberReducer,
    counterState: counterReducer,
    usersState: userReducer
})

export default rootReducer;