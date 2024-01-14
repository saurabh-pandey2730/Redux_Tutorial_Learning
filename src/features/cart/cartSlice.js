import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState={
    cartItems:cartItems,
    amount:20,
    total:0,
    isLoading:true,
}

const cartSlice=createSlice({
    name:"cart",
    // "initialState":initialState,
     initialState ,
     reducers:{
        clearCart:(state)=>{
            state.cartItems=[];
        },
    }
})

// console.log(cartSlice)
export const {clearCart}=cartSlice.actions

export default cartSlice.reducer