import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
};

export const getShoppingCart = createAsyncThunk(
  "cart/getShoppingCart",
  async (id) => {
    const response = await fetch("https://fakestoreapi.com/carts/user/" + id);
    const data = await response.json();
    return data;
  }
);

export const addShoppingCart = createAsyncThunk(
  "cart/addShoppingCart",
  async ({ id, productId, quantity }) => {
    const reqBody = { id: id, productId: productId, quantity: quantity };
    const data = await fetch("api/updateProduct", {
      method: "PATCH",
      body: JSON.stringify(reqBody),
    });
    return data.json();
  }
);

export const { actions, reducer } = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteCart: (state, action) => {
      state.cart = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShoppingCart.fulfilled, (state, action) => {
      state.cart = action.payload[0];
    });
    builder.addCase(addShoppingCart.fulfilled, (state, action) => {
      // console.log(action.payload)
      // const existingProductIndex = state.cart.products.findIndex(
      //   (item) => item.productId === action.payload.productId
      // );
      //   console.log(existingProductIndex)
      // if (existingProductIndex !== -1) {
      //   state.cart.products[existingProductIndex].quantity +=
      //     action.payload.quantity;
      // } else {
      //   state.cart.products.push(action.payload);
      // }
    });
  },
});
