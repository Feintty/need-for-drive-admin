import { CitiesActions } from "./CitiesActions";

export interface ICitiesInitial {
  data: null | Array<any>;
  dataCount: number;
  error?: false | string;
  filter?: string;
}

interface ICitiesInit {
  type: CitiesActions.CITIES_INIT;
  payload: {
    dataCount: number;
    data: Array<object>;
  };
}

interface ICitiesError {
  type: CitiesActions.CITIES_ERROR;
  payload: string;
}

export type CitiesAction = ICitiesInit | ICitiesError;
