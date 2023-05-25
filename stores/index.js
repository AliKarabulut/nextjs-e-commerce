import { configureStore } from "@reduxjs/toolkit";

import { reducer as cartReducer } from "./user-cart";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});