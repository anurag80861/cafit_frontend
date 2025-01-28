import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import counterReducer from './slices/counterSlice'
import dishReducer from './slices/dishSlice'



export const store = configureStore({
    reducer: {
      cart: cartReducer,  
      counter:counterReducer,
      dish:dishReducer
    },
  });