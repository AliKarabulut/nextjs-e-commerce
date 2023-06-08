import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const shoppingCart = createAsyncThunk(
  "cart/shoppingCart",
  async (id) => {
    const response = await fetch("https://fakestoreapi.com/carts/user/" + id);
    const data = await response.json();
    return data;
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
