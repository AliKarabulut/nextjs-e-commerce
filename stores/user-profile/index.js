import { getUserCartWithImage } from "@/app/api/getUserCart/route";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userProfile = createAsyncThunk("userProfile", async (id) => {
  const profile = await fetch("https://fakestoreapi.com/users/" + id);
  return profile.json();
});

const initialState = {
  profile: [],
};

export const { reducer, actions } = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});
