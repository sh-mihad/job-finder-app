import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewJob, deleteJob, editJob, getAllJobs } from "./jobsApi";

// initial state
const initialState = {
  loading: false,
  jobs: [],
  error: "",
  singleJob: {},
};

// thunk functions
export const fetchAllJobs = createAsyncThunk("jobs/fetchJobs",async () => {
    return await getAllJobs();
  })
export const addJob = createAsyncThunk("jobs/addNewJob", async (data) => {
    return await addNewJob(data);
  })
export const changeJob = createAsyncThunk("jobs/updateJob",async ({ id, data }) => {
    return await editJob(id, data);
  })
export const removeJob = createAsyncThunk("jobs/removeJob",async (id) => {
    return await deleteJob(id);
  });

// slice
const jobSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllJobs.pending,(state)=>{
        state.loading = true;
        state.error = ""
    })
    .addCase(fetchAllJobs.fulfilled,(state,action)=>{
        state.loading = true;
        state.error = "";
        state.jobs = action.payload
    })
    .addCase(fetchAllJobs.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
        state.jobs = []
    })
    .addCase(addJob.pending,(state)=>{
        state.loading = true;
        state.error = ""
    })
    .addCase(addJob.fulfilled,(state,action)=>{
        state.loading = true;
        state.error = "";
        state.jobs.push(action.payload)
    })
    .addCase(addJob.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
    })
    .addCase(changeJob.pending,(state)=>{
        state.loading = true;
        state.error = ""
    })
    .addCase(changeJob.fulfilled,(state,action)=>{
        state.loading = true;
        state.error = "";
        const getPosition = state.findIndex(j=>j.id === action.payload.id)
        state[getPosition] = action.payload
    })
    .addCase(changeJob.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
    })
    .addCase(removeJob.pending,(state)=>{
        state.loading = true;
        state.error = ""
    })
    .addCase(removeJob.fulfilled,(state,action)=>{
        state.loading = true;
        state.error = "";
         state.filter(j=>j.id !== action.payload)
    })
    .addCase(removeJob.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
    })
  },
});

export default jobSlice.reducer;
