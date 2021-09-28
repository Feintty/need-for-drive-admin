import { Dispatch } from "redux";
import axios from "axios";
import store from "../store";
import { OrdersActions } from "./OrdersActions";
import { OrdersAction } from "./OrdersTypes";
import { snackbarOpen } from "../Snackbar/SnackbarActionCreators";
import errorCodeToMessage from "../../utils/errorCodeToMessage";
import { basicAuthorizedHeader } from "../../Api/Headers";

export const fetchOrders = (count: number, page: number) => {
  return async (dispatch: Dispatch<OrdersAction>) => {
    const { filter } = store.getState().orders;
    dispatch({
      type: OrdersActions.ORDERS_DEFAULT,
    });
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/order?limit=${count}&page=${page}${filter}`,
      method: "GET",
      headers: basicAuthorizedHeader,
    })
      .then((response) => {
        dispatch({
          type: OrdersActions.ORDERS_INIT,
          payload: {
            data: response.data.data,
            dataCount: response.data.count,
          },
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: OrdersActions.ORDERS_INIT_ERROR,
            payload: error.response.status.toString(),
          });
          dispatch(
            snackbarOpen(
              "orders",
              errorCodeToMessage(error.response.status.toString()),
              "error"
            ) as any
          );
        }
      });
  };
};

export const setOrdersFilter = (currentFilter: string) => {
  return (dispatch: Dispatch<OrdersAction>) => {
    dispatch({
      type: OrdersActions.ORDERS_SET_FILTER,
      payload: currentFilter,
    });
  };
};
