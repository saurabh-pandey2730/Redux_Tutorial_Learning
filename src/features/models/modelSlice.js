import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isOpen:false,

}

const modelSlice=createSlice({
    name:"model",
    initialState,
    reducers:{
        openModel(state, action){
            state.isOpen=true;
            },
        closeModel(state, action){
            state.isOpen=false;
            },

        },
})
export const {openModel, closeModel} =modelSlice.actions

export default modelSlice.reducer