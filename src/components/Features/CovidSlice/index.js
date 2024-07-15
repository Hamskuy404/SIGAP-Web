import { createSlice }  from "@reduxjs/toolkit";
import data from "../.././../utils/constants/provinces"

const covidSlice = createSlice({
    name:"covid",
    initialState:{
        covid:  data.provinces
    },
    reducers:{
        updateCovid(state, action){
            state.covid = action.payload
        }
    }
})

const {updateCovid} = covidSlice.actions;
const covidRedusers = covidSlice.reducer;

export default covidRedusers;
export {updateCovid}