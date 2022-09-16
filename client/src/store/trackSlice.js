import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
    name:"tracking",
    initialState:{
        tracking:false
    },
    reducers:{
        trackon(state){
        state.tracking = true
        },
        trackoff(state){
        state.tracking = false
        }
    }
})

export const trackActions = trackSlice.actions