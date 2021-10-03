import { CarsActions } from "./CarsActions";

export interface ICarsInitial {
  data: null | Array<any>;
  dataFiltered: null | Array<any>;
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

interface ICarsInitFiltered {
  type: CarsActions.CARS_INIT_FILTERED;
  payload: {
    dataCount: number;
    dataFiltered: Array<object>;
  };
}

interface ICarsSetFilter {
  type: CarsActions.CARS_SET_FILTER;
  payload: string;
}

interface ICarsError {
  type: CarsActions.CARS_ERROR;
  payload: string;
}

interface ICarsDropFilteredData {
  type: CarsActions.CARS_DROP_FILTERED_DATA;
}

export type CarsAction =
  | ICarsInit
  | ICarsError
  | ICarsSetFilter
  | ICarsInitFiltered
  | ICarsDropFilteredData;
