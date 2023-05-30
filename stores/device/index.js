import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobile: false,
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDevice(state) {
      state.mobile = action.payload;
    },
  },
});

export const deviceActions = deviceSlice.actions;

export default deviceSlice.reducer;
