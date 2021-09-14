import { FilterActions } from "./FilterActions";
import { FIlterInitial } from "./FilterInitial";
import { FilterAction, IFilterInitial } from "./FilterTypes";

const FilterReducer = (
  state = FIlterInitial,
  action: FilterAction
): IFilterInitial => {
  switch (action.type) {
    case FilterActions.FILTER_ADD_TO:
      return { ...action.payload };
    default:
      return state;
  }
};

export default FilterReducer;
