import { createSelector } from "reselect";
import { CategoryItem, StateType } from "../../types.ts";

const selectCategoryReducer = (state: StateType) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories,
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      (acc as { [key: string]: CategoryItem[] })[title.toLowerCase()] = items;
      return acc;
    }, {}),
);
