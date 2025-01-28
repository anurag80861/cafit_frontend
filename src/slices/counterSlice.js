import { createSlice } from '@reduxjs/toolkit';

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        item:[]
    },
    reducers:{
        setCounter:(state,action)=>{
            state.item = action.payload;
        }
    },
});

export const { setCounter } = counterSlice.actions;

export default counterSlice.reducer