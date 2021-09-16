import { CarsActions } from "./CarsActions";
import { CarsInitial } from "./CarsInitial";
import { CarsAction, ICarsInitial } from "./CarsTypes";

const CarsReducer = (state = CarsInitial, action: CarsAction): ICarsInitial => {
  switch (action.type) {
    case CarsActions.CARS_INIT:
      return {
        ...state,
        ...action.payload,
        dataFiltered: state.dataFiltered,
        error: false,
      };
    case CarsActions.CARS_SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case CarsActions.CARS_INIT_FILTERED:
      return {
        ...state,
        ...action.payload,
        data: state.dataFiltered,
        error: false,
      };
    case CarsActions.CARS_ERROR:
      return {
        ...CarsInitial,
        error: action.payload,
      };
    case CarsActions.CARS_DROP_FILTERED_DATA:
      return {
        ...state,
        dataFiltered: null,
      };
    default:
      return state;
  }
};

export default CarsReducer;
