import { createSlice } from "@reduxjs/toolkit"

const initialState = {

}

export const { reducer: filmManageReducer, actions: filmManageAction } = createSlice({
    name: 'filmManage',
    initialState,
    reducers: {},
    extraReducers: (builder) => { }
})