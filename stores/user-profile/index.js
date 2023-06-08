import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userProfile = createAsyncThunk("userProfile", async (id) => {
  const profile = await fetch("https://fakestoreapi.com/users/" + id);
  return profile.json();
});

const initialState = {
  profile: {},
};

export const { actions, reducer } = createSlice({
  name: "profile",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.profile = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});
