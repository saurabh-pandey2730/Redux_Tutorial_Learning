import { createSlice } from "@reduxjs/toolkit";


const initialState={
    cartItems:[],
    amount:20,
    total:0,
    isLoading:true,
}

const cartSlice=createSlice({
    name:"cart",
    // "initialState":initialState,
     initialState ,
})

// console.log(cartSlice)

export default cartSlice.reducer