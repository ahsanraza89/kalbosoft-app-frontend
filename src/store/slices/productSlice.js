import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../config/config.js";
import { PRODUCTS_ROUTES } from "../../config/routes";
const  initialState = {
    products : [],
    error : null,
    loading : false,
    product : {},
}
export const getProducts = createAsyncThunk(
    "products/getProducts",
    async ({  callBack}) => {
        try {
            const response = await API.GET(PRODUCTS_ROUTES.GET);
            if(callBack){
                callBack(response)
            }
           console.log(response.data);
           return response.data
          } catch (error) {
                throw error.response.data.message;
          } 
        }
)

export const getByIdProduct = createAsyncThunk(
    "products/getByIdProduct",
    async ({ id , callBack}) => {
        try {
            const response = await API.GET(PRODUCTS_ROUTES.GET_BY_ID.replace(':id', id));
            if(callBack){
                callBack(response)
            }
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
        builder
     
       .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
       .addCase(getByIdProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload;
        })

        
    
    }

    

})


export default ProuctsSlice.reducer