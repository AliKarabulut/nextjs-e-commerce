import { getUserCartWithImage } from "@/app/api/getUserCart/route";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userCart = createAsyncThunk("userCart", async () => {
  const sepet = await getUserCartWithImage();
  return sepet;
});

const initialState = {
  cart: [],
};

export const { reducer, actions } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});
