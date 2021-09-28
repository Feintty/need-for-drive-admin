import { CarsManagerActions } from "./CarsManagerActions";

export interface ICarsManagerData {
  priceMax: number;
  priceMin: number;
  name: string;
  thumbnail: { path: string; name: string; file: File | null };
  description: string;
  categoryId: {
    id: string;
    name: string;
  };
  colors: Array<string>;
}

export interface ICarsManagerInitial {
  id: string;
  data: ICarsManagerData;
  error: false | string;
}

interface ICarsManagerChangeData {
  type: CarsManagerActions.CARS_MANAGER_CHANGE_DATA;
  payload: object;
}

interface ICarsManagerChangeId {
  type: CarsManagerActions.CARS_MANAGER_CHANGE_ID;
  payload: string;
}

interface ICarsManagerError {
  type: CarsManagerActions.CARS_MANAGER_ERROR;
  payload: string;
}

interface ICarsManagerSetDefault {
  type: CarsManagerActions.CARS_MANAGER_SET_DEFAULT;
}

export type CarsManagerAction =
  | ICarsManagerChangeData
  | ICarsManagerChangeId
  | ICarsManagerError
  | ICarsManagerSetDefault;
