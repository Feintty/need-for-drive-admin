import { Dispatch } from "redux";
import axios from "axios";
import store from "../store";
import { OrdersManagerAction } from "./OrdersManageTypes";
import { OrdersManagerActions } from "./OrdersManagerActions";
import errorCodeToMessage from "../../utils/errorCodeToMessage";
import { snackbarOpen } from "../Snackbar/SnackbarActionCreators";
import { basicAuthorizedHeader } from "../../Api/Headers";

export const setOrdersManagerData = (data: object) => {
  return (dispatch: Dispatch<OrdersManagerAction>) => {
    dispatch({
      type: OrdersManagerActions.ORDERS_MANAGER_CHANGE_DATA,
      payload: data,
    });
  };
};

export const setOrdersManagerId = (id: string) => {
  return (dispatch: Dispatch<OrdersManagerAction>) => {
    dispatch({
      type: OrdersManagerActions.ORDERS_MANAGER_CHANGE_ID,
      payload: id,
    });
  };
};

export const deleteOrdersManagerData = () => {
  return async (dispatch: Dispatch<OrdersManagerAction>) => {
    const ordersManager = store.getState().ordersManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/order/${ordersManager.id}`,
      method: "DELETE",
      headers: basicAuthorizedHeader(),
    })
      .then(() => {
        dispatch(
          snackbarOpen("admin", "Операция выполнена успешно!", "success") as any
        );
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: OrdersManagerActions.ORDERS_MANAGER_ERROR,
            payload: error.response.status.toString(),
          });
          dispatch(
            snackbarOpen(
              "admin",
              errorCodeToMessage(error.response.status.toString()),
              "error"
            ) as any
          );
        }
      });
  };
};

export const updateOrdersManagerData = () => {
  return async (dispatch: Dispatch<OrdersManagerAction>) => {
    const ordersManager = store.getState().ordersManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/order/${ordersManager.id}`,
      method: "PUT",
      headers: basicAuthorizedHeader(),
      data: {
        ...ordersManager.data,
      },
    })
      .then(() => {
        dispatch(
          snackbarOpen("admin", "Операция выполнена успешно!", "success") as any
        );
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: OrdersManagerActions.ORDERS_MANAGER_ERROR,
            payload: error.response.status.toString(),
          });
          dispatch(
            snackbarOpen(
              "admin",
              errorCodeToMessage(error.response.status.toString()),
              "error"
            ) as any
          );
        }
      });
  };
};
