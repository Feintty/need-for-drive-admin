import { OrdersManagerActions } from "./OrdersManagerActions";

export interface IOrdersManagerData {
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
}

export interface IOrdersManagerInitial {
  id: string;
  data: IOrdersManagerData;
  error: false | string;
}

interface IOrdersManagerChangeData {
  type: OrdersManagerActions.ORDERS_MANAGER_CHANGE_DATA;
  payload: object;
}

interface IOrdersManagerChangeId {
  type: OrdersManagerActions.ORDERS_MANAGER_CHANGE_ID;
  payload: string;
}

interface IOrdersManagerError {
  type: OrdersManagerActions.ORDERS_MANAGER_ERROR;
  payload: string;
}

export type OrdersManagerAction =
  | IOrdersManagerChangeData
  | IOrdersManagerChangeId
  | IOrdersManagerError;
