import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

const initialState = {
  cart: "",
};
export const getShoppingCart = createAsyncThunk(
  "cart/getShoppingCart",
  async (id) => {
    const response = await fetch("https://fakestoreapi.com/carts/user/" + id);
    const data = await response.json();
    return data;
  }
);

export const updateShoppingCart = createAsyncThunk(
  "cart/updateShoppingCart",
  async ({ productId, quantity }, thunkAPI) => {
    const cart = thunkAPI.getState().cart.cart;
    let newCart = structuredClone(cart);
    const existingProductIndex = newCart.products.findIndex(
      (item) => item.productId === productId
    );
    if (existingProductIndex !== -1) {
      newCart.products[existingProductIndex].quantity += quantity;
    } else {
      newCart.products.push({ productId: productId, quantity: quantity});
    }
    
    const data = await fetch("/api/updateProduct", {
      method: "PUT",
      body: JSON.stringify(newCart),
    });
    return await data.json();
  }
);

export const { actions, reducer } = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    deleteCart: (state, action) => {
      state.cart = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShoppingCart.fulfilled, (state, action) => {
      state.cart = action.payload[0];
    });
    builder.addCase(updateShoppingCart.fulfilled, (state, action) => {
      console.log("fulfilled");

      console.log(action.payload);
      state.cart = action.payload.data;

    });
  },
});
