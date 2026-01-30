import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState:{
        items:[],
        loading:null,
        error: null,
    },
    reducer:{
        setDefaultCities(state, action){
            
        }
    }
})

export const {setDefaultCities} = weatherSlice.actions;
export default weatherSlice.reducer;