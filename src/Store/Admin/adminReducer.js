import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading:false,
    isError:false
}

const adminReducer = createSlice({
    name:"adminSlice",
    initialState,
    reducers:{}
});

export default adminReducer.reducer