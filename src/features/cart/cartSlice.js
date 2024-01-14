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
        removeItem:(state,action)=>{
             console.log(action.payload)
            const itemId=action.payload
            state.cartItems = state.cartItems.filter((item )=> item.id !== itemId)
        },
        increase:(state,action)=>{
            const cartItem=state.cartItems.find((item)=>item.id===action.payload.id)
            cartItem.amount=cartItem.amount +1
        },
        decrease:(state,{payload})=>{
            const cartItem=state.cartItems.find((item)=>item.id===payload.id)
            cartItem.amount=cartItem.amount - 1 ;
        },
        calculateTotals:(state)=>{
            let amount=0
            let total=0
            state.cartItems.forEach((item)=>{
                amount+=item.amount;
                total += item.amount * item.price;
        })
        state.amount=amount
        state.total=total
    },
},
})

// console.log(cartSlice)
export const {clearCart ,removeItem , increase,decrease,calculateTotals}=cartSlice.actions

export default cartSlice.reducer