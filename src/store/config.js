import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { filmManageReducer } from "./filmManage/filmManageReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    filmManageReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
})