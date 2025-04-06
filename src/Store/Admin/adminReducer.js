import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
  isError: false,
  toggleDialog: {
    orderId : "",
    isOpen : false
  },
}

const adminReducer = createSlice({
    name:"adminSlice",
    initialState,
    reducers: {
        isToggleDialog(state, { payload }) {
          state.toggleDialog = payload;
        },
      },
});
export const { isToggleDialog } = adminReducer.actions;
export default adminReducer.reducer