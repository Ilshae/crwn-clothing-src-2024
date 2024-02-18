import { createAction } from "../../utils/firebase/reducer.utils.ts";
import { CATEGORIES_ACTION_TYPES } from "./types.ts";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
