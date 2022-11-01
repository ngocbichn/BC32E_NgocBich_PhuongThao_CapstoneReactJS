import { createSlice } from "@reduxjs/toolkit"

const initialState = {
isLoading: false
}

export const {reducer: loadingReducer, actions: loadingAction} = createSlice({
    name: 'loading',
    initialState,
    reducer: {
        displayLoading: (state,action) => { 
            state.isLoading = true
        }

    },
    extraReducers: (builder) => {

    }

})