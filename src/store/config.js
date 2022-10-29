import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from 'redux'
import thunk from "redux-thunk";
import { filmManageReducer } from "./filmManage";
import { cinemaManageReducer,movieBookingReducer, userManageReducer } from "./filmManage";
import * as reducers from './filmManage'

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    filmManageReducer,
    cinemaManageReducer,
    movieBookingReducer,
    userManageReducer

    
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
})

