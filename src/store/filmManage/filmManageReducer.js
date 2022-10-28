import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { filmManageServices } from '../../services/filmManageServices'

const initialState = {
    movieList: [],
    isFetching: false,
    error: undefined,
    isFetchingMD: false,
    movieDetail: undefined,
    isFetchingSchedule: false,
    movieSchedule: undefined
}

export const { reducer: filmManageReducer, actions: filmManageAction } = createSlice({
    name: 'filmManage',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        //getmovielist
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
        //getmoviedetail
        .addCase(getMovieDetail.pending,(state,action) => {
            state.isFetchingMD = true
        })
        .addCase(getMovieDetail.fulfilled, (state,action) => {
            state.isFetchingMD = false
           state.movieDetail= action.payload
            
        })
        .addCase(getMovieDetail.rejected, (state,action) => {
            state.isFetchingMD = false
            state.error = action.payload
          
        })

        // getMovieSchedulebyId
        // .addCase(getMovieSchedulebyId.pending,(state,action) => {
        //     state.isFetchingSchedule = true
        // })
        // .addCase(getMovieSchedulebyId.fulfilled,(state,action) => {
        //     state.isFetchingSchedule = false
        //     state.movieSchedule = action.payload

        // })
        // .addCase(getMovieSchedulebyId.rejected,(state,action) => {
        //     state.isFetchingSchedule = false
        //     state.movieSchedule = action.payload

        // })
    }
})

export const getMovieList = createAsyncThunk(
    'filmManage/getMovieList',
    async (data, { dispatch, getState, rejectWithValue }) => {
        try {
            const value = getState().filmManageReducer
            const result = await filmManageServices.getMovieList()
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getMovieDetail = createAsyncThunk('filmMange/getMovieDetail', async(movieId, {dispatch,getState,rejectWithValue})=> {
    try {
        const result = await filmManageServices.getMovieDetail(movieId)
        return result.data.content
        
    } catch (error) {
        return rejectWithValue(error.response.data)
        
    }

})

// export const createMovieSchedule = createAsyncThunk('filmMange/getMovieSchedulebyId', async(movieId,{dispatch,getState,rejectWithValue}) => {
//     try {
//         const result = await filmManageServices.getMovieSchedulebyId(movieId)
//         return result.data.content
        
//     } catch (error) {
//         return rejectWithValue(error.response.data)
        
//     }
// })
