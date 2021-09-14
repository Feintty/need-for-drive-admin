import { Dispatch } from "redux";
import store from "../store";
import { FilterActions } from "./FilterActions";
import { FilterAction } from "./FilterTypes";

export const filterAdd = (dataType: string, dataKey: string, value: string) => {
  return (dispatch: Dispatch<FilterAction>) => {
    const filter = store.getState().filter;
    const altObj = {
      ...filter,
      [dataType]: {
        ...filter[dataType],
        [dataKey]: value,
      },
    };
    dispatch({
      type: FilterActions.FILTER_ADD_TO,
      payload: altObj,
    });
  };
};

export const filtersToString = (dataType: string) => {
  const filter = store.getState().filter[dataType];
  let filterString = "";
  for (const [key, value] of Object.entries(filter)) {
    if (value) {
      filterString += `&${key}=${value}`;
    }
  }
  return filterString;
};
