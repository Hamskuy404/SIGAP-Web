import { createSlice }  from "@reduxjs/toolkit";
import data from "../../../utils/constants/provinces";
import covidRedusers from ".";
import ENPOINT from "../../../utils/constants/enpoint";

const datSlice = createSlice({
    name:"data",
    initialState:{
        data:[]
    },
    reducers:{
        addDataCovid(state, action){
            state.data = action.payload
        }
    }
})

const {addDataCovid} = datSlice.actions;
const dataRedusers = datSlice.reducer;

export default dataRedusers;
export {addDataCovid}