import {combineReducers} from "redux";
import StudentReducer from "./StudentReducer";
import CounterReducer from "./CounterReducer";


export default combineReducers({
    // StudentReducer: StudentReducer,
    StudentReducer,
    CounterReducer

})