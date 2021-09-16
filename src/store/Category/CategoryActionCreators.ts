import { Dispatch } from "redux";
import axios from "axios";
import { CategoryActions } from "./CategoryActions";
import { snackbarOpen } from "../Snackbar/SnackbarActionCreators";
import errorCodeToMessage from "../../utils/errorCodeToMessage";

export const fetchCategory = () => {
  return async (dispatch: Dispatch<any>) => {
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/category`,
      method: "GET",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
      },
    })
      .then((response) => {
        dispatch({
          type: CategoryActions.CATEGORY_INIT,
          payload: {
            data: response.data.data,
            dataCount: response.data.count,
          },
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: CategoryActions.CATEGORY_ERROR,
            payload: error.response.status.toString(),
          });
          dispatch(
            snackbarOpen(
              "category",
              errorCodeToMessage(error.response.status.toString()),
              "error"
            )
          );
        }
      });
  };
};
