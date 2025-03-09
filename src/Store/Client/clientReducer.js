import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading:false,
    isError:false
}

const clientReducer = createSlice({
    name:"clientSlice",
    initialState,
    reducers:{}
});

export default clientReducer.reducer