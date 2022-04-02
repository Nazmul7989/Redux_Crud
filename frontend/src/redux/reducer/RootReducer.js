import { combineReducers } from 'redux';
import StudentReducer from "./StudentfReducer";
import CounterReducer from "./CounterReducer";


export default combineReducers({
    studentReducer: StudentReducer,
    counterReducer: CounterReducer,
})