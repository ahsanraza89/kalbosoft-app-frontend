import { configureStore } from '@reduxjs/toolkit'
import  ProductsSlice  from './slices/productSlice'
import  AuthSlice  from './slices/authSlice';

 const store = configureStore({
  reducer: {
    ProductsSlice : ProductsSlice,
    AuthSlice : AuthSlice
  },
})
export default store;