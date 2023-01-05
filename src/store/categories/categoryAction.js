import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";
import { createAction } from "../../utils/reducer/reducerUtils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
