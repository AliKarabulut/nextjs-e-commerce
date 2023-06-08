import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userProfile = createAsyncThunk("userProfile", async (id) => {
  const response = await fetch("https://fakestoreapi.com/users/" + id);
  const profile = await response.json();
  return profile;
});

const initialState = {
  profile: {},
};

export const { actions, reducer } = createSlice({
  name: "profile",
  initialState,
  reducers: {
    deleteUser: (state) => {
      state.profile = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});
