import { configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./user-cart";
import { reducer as authReducer } from "./auth";
import { reducer as profileReducer } from "./user-profile";


export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      auth: authReducer,
      profile: profileReducer,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});
