import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer.ts";
import { categoriesReducer } from "./categories/categoriesReducer.ts";
import { cartReducer } from "./cart/cartReducer.ts";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
