import {combineReducers} from "redux";
import studentReducer from "./StudentReducer";
import counterReducer from "./CounterReducer";

export default combineReducers({
    studentReducer: studentReducer,
    counterReducer: counterReducer,
})