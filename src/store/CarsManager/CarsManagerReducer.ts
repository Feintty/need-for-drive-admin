import { CarsManagerInitial } from "./CarsManagerInitial";
import { CarsManagerAction, ICarsManagerInitial } from "./CarsManagerTypes";
import { CarsManagerActions } from "./CarsManagerActions";

const CarsManagerReducer = (
  state = CarsManagerInitial,
  action: CarsManagerAction
): ICarsManagerInitial => {
  switch (action.type) {
    case CarsManagerActions.CARS_MANAGER_CHANGE_DATA:
      return {
        id: state.id,
        data: { ...state.data, ...action.payload },
        error: false,
      };
    case CarsManagerActions.CARS_MANAGER_CHANGE_ID:
      return {
        ...state,
        id: action.payload,
      };
    case CarsManagerActions.CARS_MANAGER_ERROR:
      return {
        ...CarsManagerInitial,
        error: action.payload,
      };
    case CarsManagerActions.CARS_MANAGER_SET_DEFAULT:
      return {
        ...CarsManagerInitial,
      };
    default:
      return state;
  }
};

export default CarsManagerReducer;
