import { OrdersActions } from "./OrdersActions";

export interface IOrdersInitial {
  data: null | Array<any>;
  dataCount: number;
  error?: false | string;
  filter?: string;
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

interface IOrderSetFilter {
  type: OrdersActions.ORDERS_SET_FILTER;
  payload: string;
}

export type OrdersAction =
  | IOrdersInit
  | IOrdersInitError
  | IOrderDefault
  | IOrderSetFilter;
