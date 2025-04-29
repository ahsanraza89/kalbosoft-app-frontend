import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CART_ROUTES } from "../../config/routes";
import { API } from "../../config/config";


const initialState = {
    cart : [] ,
    totalPrice : 0 ,
    loading : false ,
    error : null ,
    
}

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({data , callBack}) =>{
        try {
            const response = await API.POST(CART_ROUTES.ADD_TO_CART , data);
            if(callBack){
                callBack(response)
            }
            console.log("🚀 ~ response.data:", response.data)
            return response.data;

        } catch (error) {
            if (callBack){
                callBack(error.response)
            }
            throw error.response.data.message;
        }
    }

);

export const getCart = createAsyncThunk(
    "cart/getCart",
    async ({ callBack} ) =>{
        try {
            const response = await API.GET(CART_ROUTES.GET_CART );
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

export const removeFromCart = createAsyncThunk(
    "cart/removeFromCart",
    async ({id , callBack}) =>{
        try {
            const response = await API.DELETE(CART_ROUTES.REMOVE_FROM_CART.replace(':id', id));
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


export const deleteCart = createAsyncThunk(
    "cart/deleteCart",
    async ({id , callBack}) =>{
        try {
            const response = await API.DELETE(CART_ROUTES.DELETE_CART.replace(':id', id));
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

export const CartSlice = createSlice({
    name : "cart",
    initialState ,
    reducers : {},
    extraReducers :(builder) => {
        builder
        .addCase(addToCart.fulfilled , (state , action)=>{
            state.loading = false;
      
        })
        .addCase(getCart.fulfilled , (state , action) =>{
            state.loading = false;
            state.cart = action.payload.cart.items;
            state.totalPrice = action.payload.cart.totalPrice;
        })
        .addCase(removeFromCart.fulfilled , (state , action) =>{
            state.loading = false;
         
        })
        .addCase(deleteCart.fulfilled , (state , action) =>{
            state.loading = false;
          
        })
    } 


});

export default CartSlice.reducer;