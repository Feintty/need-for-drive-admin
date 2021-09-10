import { Dispatch } from "redux";
import axios from "axios";
import store from "../store";
import { OrdersActions } from "./OrdersActions";
import { OrdersAction } from "./OrdersTypes";

export const fetchOrders = (count: number, page: number) => {
  return async (dispatch: Dispatch<OrdersAction>) => {
    const { accessToken } = store.getState().user;
    dispatch({
      type: OrdersActions.ORDERS_DEFAULT,
    });
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/order?limit=${count}&page=${page}`,
      method: "GET",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
      },
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
        }
      });
  };
};

// export const setFilteredOrders = () => {
//   return (dispatch: Dispatch<UserAction>) => {
//     const userData = cookies.load("userData");

//     if (userData) {
//       const { refreshToken, accessToken } = userData;
//       dispatch({
//         type: UserActions.USER_LOGIN_SUCCES,
//         payload: {
//           accessToken,
//           refreshToken,
//         },
//       });
//     }
//   };
// };
