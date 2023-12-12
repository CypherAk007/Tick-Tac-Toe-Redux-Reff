import { configureStore } from "@reduxjs/toolkit";
import matReducer from './mat'
import logicReducer from "./logic";
const store = configureStore({
    reducer:{
        mat:matReducer,
        logic:logicReducer
    }
})

export default store;