import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { filmManageServices } from '../../services/filmManageServices'

const initialState = {
    movieList: [],
    isFetching: false,
    error: undefined,
}

export const { reducer: filmManageReducer, actions: filmManageAction } = createSlice({
    name: 'filmManage',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovieList.pending, (state, action) => {
                state.isFetching = true
            })
            .addCase(getMovieList.fulfilled, (state, action) => {
                state.movieList = action.payload
                state.isFetching = false
            })
            .addCase(getMovieList.rejected, (state, action) => {
                state.error = action.payload
                state.isFetching = false
            })
    },
})

export const getMovieList = createAsyncThunk(
    'filmManage/getMovieList',
    async (data, { dispatch, getState, rejectWithValue }) => {
        try {
            // const value = getState().filmManageReducer
            const result = await filmManageServices.getMovieList()
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
