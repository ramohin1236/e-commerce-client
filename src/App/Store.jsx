import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/user/userSlice'
import productReducer from '../features/Product/productSlice'



export const store = configureStore({
    reducer: {
        auth: authReducer,
        product:productReducer
    },
})