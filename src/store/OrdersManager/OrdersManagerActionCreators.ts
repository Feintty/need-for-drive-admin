import { Dispatch } from "redux";
import axios from "axios";
import store from "../store";
import { OrdersManagerAction } from "./OrdersManageTypes";
import { OrdersManagerActions } from "./OrdersManagerActions";

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
    const { accessToken } = store.getState().user;
    const ordersManager = store.getState().ordersManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/order/${ordersManager.id}`,
      method: "DELETE",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    }).catch((error) => {
      if (error.response) {
        dispatch({
          type: OrdersManagerActions.ORDERS_MANAGER_ERROR,
          payload: error.response.status.toString(),
        });
      }
    });
  };
};

export const updateOrdersManagerData = () => {
  return async (dispatch: Dispatch<OrdersManagerAction>) => {
    const { accessToken } = store.getState().user;
    const ordersManager = store.getState().ordersManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/order/${ordersManager.id}`,
      method: "PUT",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        ...ordersManager.data,
      },
    }).catch((error) => {
      if (error.response) {
        dispatch({
          type: OrdersManagerActions.ORDERS_MANAGER_ERROR,
          payload: error.response.status.toString(),
        });
      }
    });
  };
};
