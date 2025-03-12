import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  toggleDialog: {
    orderId : "",
    isOpen : false
  },
};

const clientReducer = createSlice({
  name: "clientSlice",
  initialState,
  reducers: {
    isToggleDialog(state, { payload }) {
      state.toggleDialog = payload;
    },
  },
});

export const { isToggleDialog } = clientReducer.actions;

export default clientReducer.reducer;
