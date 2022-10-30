import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ticketBookingService } from "../../services/ticketBookingService"


const initialState = {
    ticketInfo: [],
    isFetching: false
}

export const {reducer: movieBookingReducer, actions: movieBookingAction} = createSlice({
    name: 'movieBooking',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getTicketRoomDetail.pending, (state,action) => {
            state.isFetching = true
           
        })
        .addCase(getTicketRoomDetail.fulfilled, (state,action) => {
            state.isFetching = false
            state.ticketInfo = action.payload
        })
        .addCase(getTicketRoomDetail.rejected, (state,action) => {
            state.isFetching = false
            state.ticketInfo = action.payload
        })
    

    }
} )


export const getTicketRoomDetail = createAsyncThunk('movieBooking/getTicketRoomDetail', async(maLichChieu, {dispatch,getState,rejectWithValue}) => {

try {
    const result = await ticketBookingService.getTicketRoomDetail(maLichChieu)

    return result.data.content
    
} catch (error) {
    return rejectWithValue(error.data.response) 
}

})