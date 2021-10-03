import { CitiesManagerActions } from "./CitiesManagerActions";
import { CitiesManagerInitial } from "./CitiesManagerInitial";
import {
  CitiesManagerAction,
  ICitiesManagerInitial,
} from "./CitiesManagerTypes";

const CitiesManagerReducer = (
  state = CitiesManagerInitial,
  action: CitiesManagerAction
): ICitiesManagerInitial => {
  switch (action.type) {
    case CitiesManagerActions.CITIES_MANAGER_CHANGE_DATA:
      return {
        data: { ...state.data, ...action.payload },
        error: false,
      };
    case CitiesManagerActions.CITIES_MANAGER_ERROR:
      return {
        ...CitiesManagerInitial,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CitiesManagerReducer;
