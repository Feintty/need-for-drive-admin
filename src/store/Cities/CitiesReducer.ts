import { CitiesActions } from "./CitiesActions";
import { CitiesInitial } from "./CitiesInitial";
import { CitiesAction, ICitiesInitial } from "./CitiesTypes";

const CitiesReducer = (
  state = CitiesInitial,
  action: CitiesAction
): ICitiesInitial => {
  switch (action.type) {
    case CitiesActions.CITIES_INIT:
      return {
        ...action.payload,
        error: false,
      };
    case CitiesActions.CITIES_ERROR:
      return {
        ...CitiesInitial,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CitiesReducer;
