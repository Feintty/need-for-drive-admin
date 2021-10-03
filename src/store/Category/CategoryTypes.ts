import { CategoryActions } from "./CategoryActions";

export interface ICategoryInitial {
  data: null | Array<any>;
  dataCount: number;
  error?: false | string;
  filter?: string;
}

interface ICategoryInit {
  type: CategoryActions.CATEGORY_INIT;
  payload: {
    dataCount: number;
    data: Array<object>;
  };
}

interface ICategoryError {
  type: CategoryActions.CATEGORY_ERROR;
  payload: string;
}

export type CategoryAction = ICategoryInit | ICategoryError;
