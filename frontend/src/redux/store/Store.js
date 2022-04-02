import { configureStore } from '@reduxjs/toolkit'
import RootReducer from "../reducer/RootReducer";

let store = configureStore({
    reducer: RootReducer,
})

store.subscribe(()=>console.log(store.getState()))

export default store;