import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../features/filters/filterSLice";
import jobsReducer from "../features/jobs/jobSLice";


const store = configureStore({
    reducer:{
        jobs : jobsReducer,
        filters:filtersReducer
    }
})

export default store;