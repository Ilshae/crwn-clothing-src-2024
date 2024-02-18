import { createAction } from "../../utils/firebase/reducer.utils.ts";
import { USER_ACTION_TYPES } from "./types.ts";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
