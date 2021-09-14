import { FilterActions } from "./FilterActions";

export interface IFilterAddElement {
  [key: string]: {
    [key: string]: string;
  };
}

interface IFilterElement {
  [key: string]: string;
}

export interface IFilterInitial {
  [key: string]: IFilterElement;
}

interface IFilterEdit {
  type: FilterActions.FILTER_ADD_TO;
  payload: IFilterAddElement;
}

export type FilterAction = IFilterEdit;
