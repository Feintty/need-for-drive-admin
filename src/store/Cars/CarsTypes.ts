import { CarsActions } from "./CarsActions";

export interface ICarsInitial {
  data: null | Array<any>;
  dataCount: number;
  error?: false | string;
  filter?: string;
}

interface ICarsInit {
  type: CarsActions.CARS_INIT;
  payload: {
    dataCount: number;
    data: Array<object>;
  };
}

interface ICarsError {
  type: CarsActions.CARS_ERROR;
  payload: string;
}

export type CarsAction = ICarsInit | ICarsError;
