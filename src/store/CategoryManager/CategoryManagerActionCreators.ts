import { Dispatch } from "redux";
import axios from "axios";
import { CategoryManagerActions } from "./CategoryManagerActions";
import store from "../store";
import { CategoryManagerAction } from "./CategoryManagerTypes";
import { snackbarOpen } from "../Snackbar/SnackbarActionCreators";
import errorCodeToMessage from "../../utils/errorCodeToMessage";
import { basicAuthorizedHeader } from "../../Api/Headers";

export const setCategoryManagerData = (data: object) => {
  return (dispatch: Dispatch<CategoryManagerAction>) => {
    dispatch({
      type: CategoryManagerActions.CATEGORY_MANAGER_CHANGE_DATA,
      payload: data,
    });
  };
};

export const setCategoryManagerId = (id: string) => {
  return (dispatch: Dispatch<CategoryManagerAction>) => {
    dispatch({
      type: CategoryManagerActions.CATEGORY_MANAGER_CHANGE_ID,
      payload: id,
    });
  };
};

export const deleteCategoryData = () => {
  return async (dispatch: Dispatch<CategoryManagerAction>) => {
    const categoryManager = store.getState().categoryManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/category/${categoryManager.id}`,
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
            type: CategoryManagerActions.CATEGORY_MANAGER_ERROR,
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

export const updateCategoryData = () => {
  return async (dispatch: Dispatch<CategoryManagerAction>) => {
    const categoryManager = store.getState().categoryManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/category/${categoryManager.id}`,
      method: "PUT",
      headers: basicAuthorizedHeader(),
      data: {
        ...categoryManager.data,
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
            type: CategoryManagerActions.CATEGORY_MANAGER_ERROR,
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

export const addCategoryData = () => {
  return async (dispatch: Dispatch<CategoryManagerAction>) => {
    const categoryManager = store.getState().categoryManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/category`,
      method: "POST",
      headers: basicAuthorizedHeader(),
      data: {
        ...categoryManager.data,
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
            type: CategoryManagerActions.CATEGORY_MANAGER_ERROR,
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
