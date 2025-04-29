import { configureStore } from '@reduxjs/toolkit'
import  ProductsSlice  from './slices/productSlice'
import  AuthSlice  from './slices/authSlice';
import  CartSlice  from './slices/cartSlice';

 const store = configureStore({
  reducer: {
    ProductsSlice : ProductsSlice,
    AuthSlice : AuthSlice ,
    CartSlice : CartSlice
  },
})
export default store;