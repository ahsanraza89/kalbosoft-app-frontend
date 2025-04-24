import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../config/config";
import { AUTH_ROUTES } from "../../config/routes";
const initialState = {
    user: {},
    error: null,
    loading: false,
    token: null,
}
export const logIn = createAsyncThunk(
    "auth/login",
    async ({ data, callBack }) => {
        try {
            const response = await API.POST(AUTH_ROUTES.LOGIN, data);
            if (callBack) {
                callBack(response)
            }

            if (!response.data.token) {
                throw new Error("Token not found in response");
            }
            localStorage.setItem("token", response.data.token);


            return response.data
        } catch (error) {
            if (callBack) {
                callBack(error.response)
            }
            throw error.response.data.message;
        }
    }
      
    
)

export const signUp = createAsyncThunk(
    "auth/signup",
    async ({data , callBack}) =>{
         try {
            const response = await API.POST(AUTH_ROUTES.SIGNUP, data);
            

            if(response){
                callBack(response)
            }
            
           return response.data;
         } catch (error) {
            if (callBack) {
                callBack(error.response)
            }
            throw error.response.data.message;
         }
    })


 export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(logIn.pending, (state) => {
        //     state.loading = true;
        // })
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        }) ;
        // builder.addCase(logIn.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // })
       
        builder.addCase(signUp.fulfilled , (state , action)=>{
            state.loading = false;
        })
    }


})


export default AuthSlice.reducer;
