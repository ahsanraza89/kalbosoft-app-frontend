import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    user: {},
    error: null,
    loading: false,
    token: null,
}
// {
//     token:'efefer43543re',
//     user : {
//         name : "John Doe",
//         email : "isdis',
//     }

// }
export const logIn = createAsyncThunk(
    "auth/login",
    async ({ data, callBack }) => {
        try {
            const response = await axios.post("https://fakestoreapi.com/products", data);
            if (callBack) {
                callBack(response)
            }

            if (!response.data.token) {
                throw new Error("Token not found in response");
            }
            localStorage.setItem("token", response.data.token);


            console.log(response.data);
            return response.data
        } catch (error) {
            if (callBack) {
                callBack(error.response)
            }
            throw error.response.data.message;
        }
    }
      
    
)

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
        })
        // builder.addCase(logIn.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // })
    }


})


export default AuthSlice.reducer;
