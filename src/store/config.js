import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from 'redux'
import thunk from "redux-thunk";
import { filmManageReducer } from "./filmManage";
import { cinemaManageReducer } from "./filmManage";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    filmManageReducer,
    cinemaManageReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
})

