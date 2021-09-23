import { CitiesManagerActions } from "./CitiesManagerActions";

export interface ICitiesManagerData {
  id: string;
  name: string;
}

export interface ICitiesManagerInitial {
  data: ICitiesManagerData;
  error: false | string;
}

interface ICitiesManagerChangeData {
  type: CitiesManagerActions.CITIES_MANAGER_CHANGE_DATA;
  payload: object;
}

interface ICitiesManagerError {
  type: CitiesManagerActions.CITIES_MANAGER_ERROR;
  payload: string;
}

export type CitiesManagerAction =
  | ICitiesManagerChangeData
  | ICitiesManagerError;
