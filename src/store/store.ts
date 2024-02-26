import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/userSlice.ts";
import { categoriesReducer } from "./categories/categoriesSlice.ts";
import { cartReducer } from "./cart/cartSlice.ts";

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
