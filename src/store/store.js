import { configureStore } from '@reduxjs/toolkit'
import  ProuctsSlice  from './slices/productSlice'
import  AuthSlice  from './slices/authSlice';

 const store = configureStore({
  reducer: {
    ProuctsSlice : ProuctsSlice,
    AuthSlice : AuthSlice
  },
})
export default store;