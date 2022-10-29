import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userManageService } from "../../services/userManageService"

const initialState = {
    userLogin: {

    },
   
}

export const {reducer: userManageReducer, actions: userManageAction} =createSlice({
    name: 'userManage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
       

    }
})


export const userLoginAction = createAsyncThunk('/userManage/userLogin', async(userInfo, {dispatch,getState,rejectWithValue}) => {
    try {
        const result = await userManageService.getUserInfo(userInfo)
        if (result.data.statusCode === 200) {
            return result.data.content
        }
        
        
        
    } catch (error) {
        return rejectWithValue(error)
        
    }

})


