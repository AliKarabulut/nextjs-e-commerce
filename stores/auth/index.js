import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "userLogin",
  async ({ email, password }, { rejectWithValue }) => {
    const reqBody = { username: email, password: password };

    const res = await fetch("api/userLogin", {
      method: "POST",
      body: JSON.stringify(reqBody),
    });
 
    const data = await res.json();
    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  "userRegister",
  async ({ email, password }) => {
    const reqBody = { username: email, password: password };
    await fetch("api/userRegister", {
      method: "POST",
      body: JSON.stringify(reqBody),
    });
  }
);

const initialState = {
  pending: false,
  error: false,
  successful: false,
};

export const { reducer, actions } = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log("fulfilled");
      console.log(action.payload)
      state.pending = false;
      state.successful = true;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log("rejected");
      console.log(action); // Access the error message here
      state.pending = false;
      state.error = action.error.message; // Assign the error message to the state
    });

    builder.addCase(fetchRegister.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.pending = false;
      state.successful = true;
    });

    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.pending = false;
      state.error = action.payload;
    });
  },
});
