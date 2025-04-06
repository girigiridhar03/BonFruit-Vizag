import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  isMenu: false,
};

const clientReducer = createSlice({
  name: "clientSlice",
  initialState,
  reducers: {
    isMenuToggle(state, { payload }) {
      state.isMenu = payload;
    },
  },
});

export const {isMenuToggle} = clientReducer.actions;

export default clientReducer.reducer;
