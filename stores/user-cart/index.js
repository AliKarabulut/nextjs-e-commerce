import { getUserCartWithImage } from "@/app/api/getUserCart/route";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const shoppingCart = createAsyncThunk(
  "cart/shoppingCart",
  async (id) => {
    const cart = await getUserCartWithImage(id);
    return cart;
  }
);

export const { actions, reducer } = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteCart: (state,action) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(shoppingCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});
