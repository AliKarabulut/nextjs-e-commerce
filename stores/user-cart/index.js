import { getUserCartWithImage } from "@/app/api/getUserCart/route";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
};

export const shoppingCart = createAsyncThunk("cart/shoppingCart", async (id) => {
  const cart = await getUserCartWithImage(id);
  return cart;
});


export const { reducer, actions } = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(shoppingCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});
