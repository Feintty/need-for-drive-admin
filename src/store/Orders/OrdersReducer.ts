import { OrdersActions } from "./OrdersActions";
import { OrderInitial } from "./OrdersInitial";
import { IOrdersInitial, OrdersAction } from "./OrdersTypes";

const OrdersReducer = (
  state = OrderInitial,
  action: OrdersAction
): IOrdersInitial => {
  switch (action.type) {
    case OrdersActions.ORDERS_INIT:
      return {
        ...action.payload,
        filter: state.filter,
        error: false,
      };
    case OrdersActions.ORDERS_INIT_ERROR:
      return {
        ...OrderInitial,
        filter: state.filter,
        error: action.payload,
      };
    case OrdersActions.ORDERS_DEFAULT:
      return {
        ...OrderInitial,
        filter: state.filter,
      };
    case OrdersActions.ORDERS_SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default OrdersReducer;
