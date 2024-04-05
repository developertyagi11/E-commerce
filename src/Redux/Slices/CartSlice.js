import { createSlice } from "@reduxjs/toolkit";

const initialState=JSON.parse(localStorage.getItem('cart')) ?? [];

export const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;