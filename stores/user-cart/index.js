import { getUserCartWithImage } from "@/app/api/getUserCart/route";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const shoppingCart = createAsyncThunk("userCart", async () => {
  // const id = localStorage.getItem("id");
  // console.log(id)
  const cart = await getUserCartWithImage();
  return cart;
});


const initialState = {
  cart: [],
};


export const { reducer, actions } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(shoppingCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});
