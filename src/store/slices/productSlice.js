import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const  initialState = {
    products : [],
    error : null,
    loading : false
}
export const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
           console.log(response.data);
           return response.data
          } catch (error) {
                throw error.response.data.message;
          } 
        }
)
   
export const ProuctsSlice = createSlice({
    name :"products",
    initialState ,
    reducers : { },
    extraReducers : (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }


})


export default ProuctsSlice.reducer