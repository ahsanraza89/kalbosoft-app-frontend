import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { REVIEW_ROUTES } from "../../config/routes";
import { API } from "../../config/config.js";


const initialState = {
    reviews: [],
    loading: false,
    error: null,
}

export const addReview = createAsyncThunk(
    "reviews/addReview",
    async ({ data, callBack , id }) => {
        try {
            const response = await API.POST(REVIEW_ROUTES.ADD_REVIEW.replace(":id" , id) , data)
            if (callBack) {
                callBack(response)
            }
            return response.data
        } catch (error) {
            if (callBack) {
                callBack(error.response)
            }
            throw error.response.data.message
        }
    }
  
)

export const ReviewSlice =  createSlice({
   name : "review" ,
    initialState , 
    reducers : {},
    extraReducers : (builder) => {
        builder
      
        .addCase(addReview.fulfilled , (state, action) => {
            state.loading = false
             
        })
       
    }   
})

export default ReviewSlice.reducer

