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
        filteredData: action.payload.data,
        error: false,
      };
    case OrdersActions.ORDERS_FILTER:
      return {
        dataCount: state.dataCount,
        data: state.data,
        filteredData: action.payload,
        error: false,
      };
    case OrdersActions.ORDERS_INIT_ERROR:
      return {
        ...OrderInitial,
        error: action.payload,
      };
    case OrdersActions.ORDERS_DEFAULT:
      return {
        ...OrderInitial,
      };
    default:
      return state;
  }
};

export default OrdersReducer;
