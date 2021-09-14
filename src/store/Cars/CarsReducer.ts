import { CarsActions } from "./CarsActions";
import { CarsInitial } from "./CarsInitial";
import { CarsAction, ICarsInitial } from "./CarsTypes";

const CarsReducer = (state = CarsInitial, action: CarsAction): ICarsInitial => {
  switch (action.type) {
    case CarsActions.CARS_INIT:
      return {
        ...action.payload,
        error: false,
      };
    case CarsActions.CARS_ERROR:
      return {
        ...CarsInitial,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CarsReducer;
