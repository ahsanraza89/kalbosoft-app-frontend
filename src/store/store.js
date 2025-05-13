import { configureStore } from '@reduxjs/toolkit'
import  ProductsSlice  from './slices/productSlice'
import  AuthSlice  from './slices/authSlice';
import  CartSlice  from './slices/cartSlice';
import ReviewSlice  from './slices/reviewSlice';

 const store = configureStore({
  reducer: {
    ProductsSlice : ProductsSlice,
    AuthSlice : AuthSlice ,
    CartSlice : CartSlice ,
    ReviewSlice : ReviewSlice,

  },
})
export default store;