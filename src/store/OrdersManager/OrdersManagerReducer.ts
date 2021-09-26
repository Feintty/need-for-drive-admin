import { OrdersManagerInitial } from "./OrderManagerInitial";
import { OrdersManagerActions } from "./OrdersManagerActions";
import {
  IOrdersManagerInitial,
  OrdersManagerAction,
} from "./OrdersManageTypes";

const OrdersManagerReducer = (
  state = OrdersManagerInitial,
  action: OrdersManagerAction
): IOrdersManagerInitial => {
  switch (action.type) {
    case OrdersManagerActions.ORDERS_MANAGER_CHANGE_DATA:
      return {
        id: state.id,
        data: { ...state.data, ...action.payload },
        error: false,
      };
    case OrdersManagerActions.ORDERS_MANAGER_CHANGE_ID:
      return {
        ...state,
        id: action.payload,
      };
    case OrdersManagerActions.ORDERS_MANAGER_ERROR:
      return {
        ...OrdersManagerInitial,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default OrdersManagerReducer;
