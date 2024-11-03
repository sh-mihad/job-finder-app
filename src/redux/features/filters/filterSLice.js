import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filters:"",
    sort:"default",
    search:""
}


const filterSlice = createSlice({
    name:"filters",
    initialState,
    reducers:{
        addFilter:(state,action)=>{
            state.filters = action.payload
        },
        sortBy:(state,action)=>{
            state.sort = action.payload
        },
        searchBy:(state,action)=>{
            state.search = action.payload
        }
    }

})

export default filterSlice.reducer;
export const {addFilter,searchBy,sortBy} = filterSlice.actions