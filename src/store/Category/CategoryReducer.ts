import { CategoryActions } from "./CategoryActions";
import { CategoryInitial } from "./CategoryInitial";
import { CategoryAction, ICategoryInitial } from "./CategoryTypes";

const CategoryReducer = (
  state = CategoryInitial,
  action: CategoryAction
): ICategoryInitial => {
  switch (action.type) {
    case CategoryActions.CATEGORY_INIT:
      return {
        ...action.payload,
        error: false,
      };
    case CategoryActions.CATEGORY_ERROR:
      return {
        ...CategoryInitial,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
