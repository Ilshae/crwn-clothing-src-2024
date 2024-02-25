import logger from "redux-logger";
import { rootReducer } from "./rootReducer.ts";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean,
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});
