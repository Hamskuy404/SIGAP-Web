import { configureStore } from "@reduxjs/toolkit";
import covidRedusers from "../Features/CovidSlice";
import dataRedusers from "../Features/CovidSlice/data";

const store = configureStore({
    reducer:{
        covid:covidRedusers,
        data:dataRedusers,
    }
})

export default store