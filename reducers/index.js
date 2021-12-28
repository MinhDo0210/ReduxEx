import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
    itemReducer,
});

export default rootReducer;
