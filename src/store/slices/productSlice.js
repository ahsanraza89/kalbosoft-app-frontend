import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../config/config.js";
import { PRODUCTS_ROUTES } from "../../config/routes";

const  initialState = {
    products : [],
    error : null,
    loading : false,
    product : {},
}

export const createProduct = createAsyncThunk(
    "/products/createProduct",
    async ({data ,callBack}) =>{
       
        try {
            const response = await API.POST(PRODUCTS_ROUTES.CREATE, data);
 
            if(callBack){
                callBack(response)
            }
            
          return response.data;
        } catch (error) {
            if (callBack) {
                callBack(error.response)    
            }
            throw error.response.data.message;
        }
    }
)

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async ({  callBack}) => {
        try {
            const response = await API.GET(PRODUCTS_ROUTES.GET);
            if(callBack){
                callBack(response)
            }
           return response.data
          } catch (error) {
            if(callBack){
                callBack(error.response)
            }
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
           return response.data
          } catch (error ) {
                if(callBack){
                    callBack(error.response)
                }
                throw error.response.data.message;
          } 
        }
)
   
export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async ({ id , callBack}) => {
        try {
            const response = await API.DELETE(PRODUCTS_ROUTES.DELETE.replace(':id', id));
            if(callBack){
                callBack(response)
            }
           return response.data
          } catch (error ) {
                if(callBack){
                    callBack(error.response)
                }
                throw error.response.data.message;
          } 
        }
)
   
export const ProductsSlice = createSlice({
    name :"products",
    initialState ,
    reducers : { },
    extraReducers : (builder) => {
        builder
     
       .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
        })
       .addCase(getByIdProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload.product
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false;
        })
    }

    

})


export default ProductsSlice.reducer