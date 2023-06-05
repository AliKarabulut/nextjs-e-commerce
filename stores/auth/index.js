import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "userLogin",
  async ({ email, password }) => {
    // for smiulation loading
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const reqBody = { username: email, password: password };
    fetch("api/userLogin", {
      method: "POST",
      body: JSON.stringify(reqBody),
    });
  }
);

export const fetchRegister = createAsyncThunk(
  "userRegister",
  async ({ email, password }) => {
    // for smiulation loading
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const reqBody = { username: email, password: password };
    fetch("api/userRegister", {
      method: "POST",
      body: JSON.stringify(reqBody),
    });
  }
);

const initialState = {
  pending: false,
  error: null,
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
      state.error = null;
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
      state.error = null;
      state.pending = false;
    });

    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message;
    });
  },
});
