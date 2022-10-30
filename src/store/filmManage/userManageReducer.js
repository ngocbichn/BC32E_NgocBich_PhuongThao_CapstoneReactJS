import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Navigate, useNavigate } from "react-router-dom"
import { userManageService } from "../../services/userManageService"



let user = {

}

if (localStorage.getItem('User_Login')){
    user = JSON.parse(localStorage.getItem('User_Login'))

}
const initialState = {
    userLogin: user,
    isProcessingLoggin: false,
    isLoggin: false,
   
}

export const {reducer: userManageReducer, actions: userManageAction} =createSlice({
    name: 'userManage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(userLoginAction.pending, (state,action) => {
            state.isProcessingLoggin = true
            state.isLoggin = false

        })
        .addCase(userLoginAction.fulfilled, (state,action) => {
            state.isProcessingLoggin = false
            state.userLogin = action.payload
            localStorage.setItem('User_Login', JSON.stringify(action.payload))
            state.isLoggin = true

        })
        .addCase(userLoginAction.rejected, (state,action) => {
            state.isProcessingLoggin = false
            state.userLogin = action.payload
            state.isLoggin = false
        })
       

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


