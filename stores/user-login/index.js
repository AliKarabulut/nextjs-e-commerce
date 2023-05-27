
import { userLogin } from "@/app/api/userLogin/route";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk("userLogin", async (username, password) => {
  const user = await userLogin(username, password);
  return user;
});


const initialState = {
  user: [],
};


export const { reducer, actions } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
