import { OrdersActions } from "./OrdersActions";

export interface IOrdersInitial {
  data: null | Array<any>;
  filteredData?: Array<object>;
  dataCount: number;
  error?: false | string;
}

interface IOrdersInit {
  type: OrdersActions.ORDERS_INIT;
  payload: {
    dataCount: number;
    data: Array<object>;
  };
}

interface IOrdersInitError {
  type: OrdersActions.ORDERS_INIT_ERROR;
  payload: string;
}

interface IOrderDefault {
  type: OrdersActions.ORDERS_DEFAULT;
}

interface IOrdersInitFilter {
  type: OrdersActions.ORDERS_FILTER;
  payload: Array<object>;
}

export type OrdersAction =
  | IOrdersInit
  | IOrdersInitError
  | IOrdersInitFilter
  | IOrderDefault;
