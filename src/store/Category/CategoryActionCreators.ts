import { Dispatch } from "redux";
import axios from "axios";
import { CategoryActions } from "./CategoryActions";
import { snackbarOpen } from "../Snackbar/SnackbarActionCreators";
import errorCodeToMessage from "../../utils/errorCodeToMessage";
import { basicHeader } from "../../Api/Headers";
import { CategoryAction } from "./CategoryTypes";

export const fetchCategory = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/category`,
      method: "GET",
      headers: basicHeader,
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
            ) as any
          );
        }
      });
  };
};
