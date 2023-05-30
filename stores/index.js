import { configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./user-cart";
import { reducer as userReducer } from "./auth";
import deviceReducer from "./device";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      user: userReducer,
      device: deviceReducer,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});
