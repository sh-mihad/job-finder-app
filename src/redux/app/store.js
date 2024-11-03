import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs/jobSLice";


const store = configureStore({
    reducer:{
        jobs : jobsReducer
    }
})

export default store;