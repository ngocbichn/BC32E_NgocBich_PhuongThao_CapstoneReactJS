import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { filmManageServices } from '../../services/filmManageServices'

const initialState = {
    movieList: [],
    movieDetail: undefined,
}

export const { reducer: filmManageReducer, actions: filmManageAction } = createSlice({
    name: 'filmManage',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    }
})

