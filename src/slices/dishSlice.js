import { createSlice } from '@reduxjs/toolkit';

const dishSlice = createSlice({
    name: 'dish',
    initialState: {
      products:[]
    },
    reducers: {
      setDish: (state, action) => {
        state.products= action.payload;
      
      }
    },
  });
  
  export const { setDish } = dishSlice.actions;
  export default dishSlice.reducer;