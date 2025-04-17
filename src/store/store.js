import { configureStore } from '@reduxjs/toolkit'
import  ProuctsSlice  from './slices/productSlice'

 const store = configureStore({
  reducer: {
    ProuctsSlice : ProuctsSlice
  },
})
export default store;