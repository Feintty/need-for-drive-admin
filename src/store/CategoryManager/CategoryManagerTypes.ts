import { CategoryManagerActions } from "./CategoryManagerActions";

export interface ICategoryManagerData {
  name: string;
  description: string;
}

export interface ICategoryManagerInitial {
  id: string;
  data: ICategoryManagerData;
  error: false | string;
}

interface ICategoryManagerChangeData {
  type: CategoryManagerActions.CATEGORY_MANAGER_CHANGE_DATA;
  payload: object;
}

interface ICategoryChangeId {
  type: CategoryManagerActions.CATEGORY_MANAGER_CHANGE_ID;
  payload: string;
}

interface ICategoryManagerError {
  type: CategoryManagerActions.CATEGORY_MANAGER_ERROR;
  payload: string;
}

export type CategoryManagerAction =
  | ICategoryManagerChangeData
  | ICategoryManagerError
  | ICategoryChangeId;
