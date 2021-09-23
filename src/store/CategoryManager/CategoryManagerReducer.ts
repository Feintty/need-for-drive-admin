import { CategoryManagerActions } from "./CategoryManagerActions";
import { CategoryManagerInitial } from "./CategoryManagerInitial";
import {
  CategoryManagerAction,
  ICategoryManagerInitial,
} from "./CategoryManagerTypes";

const CategoryManagerReducer = (
  state = CategoryManagerInitial,
  action: CategoryManagerAction
): ICategoryManagerInitial => {
  switch (action.type) {
    case CategoryManagerActions.CATEGORY_MANAGER_CHANGE_DATA:
      return {
        id: state.id,
        data: { ...state.data, ...action.payload },
        error: false,
      };
    case CategoryManagerActions.CATEGORY_MANAGER_CHANGE_ID:
      return {
        ...state,
        id: action.payload,
      };
    case CategoryManagerActions.CATEGORY_MANAGER_ERROR:
      return {
        ...CategoryManagerInitial,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CategoryManagerReducer;
