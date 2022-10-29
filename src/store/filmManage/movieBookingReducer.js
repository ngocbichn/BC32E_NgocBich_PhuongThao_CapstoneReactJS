import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    ticket: [],
    isFetching: false
}

export const {reducer: movieBookingReducer, actions: movieBookingAction} = createSlice({
    name: 'movieBooking',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
    

    }
} )