import { userLogin } from "@/app/api/userLogin/route";
import { userRegister } from "@/app/api/userRegister/route";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "userLogin",
  async ({username, password}) => {
    // for smiulation loading
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const user = await userLogin(username, password);
    return user;
  }
);

export const fetchRegister = createAsyncThunk(
  "userRegister",
  async ({username, password}) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const user = await userRegister(username, password);
    console.log(user)
    return user;
  }
);


const initialState = {
  user: [],
  pending: false,
  error: null,
  success: false
};

export const { reducer, actions } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.pending = true;
   
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.success = true;
      state.pending = false;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message;
    });

    builder.addCase(fetchRegister.pending, (state, action) => {
      state.pending = true;
   
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.success = true;
      state.pending = false;
    });
    
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message;
    });
  },
});
