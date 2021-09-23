import { Dispatch } from "redux";
import axios from "axios";
import { CategoryManagerActions } from "./CategoryManagerActions";
import store from "../store";
import { CategoryManagerAction } from "./CategoryManagerTypes";

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
    const { accessToken } = store.getState().user;
    const categoryManager = store.getState().categoryManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/category/${categoryManager.id}`,
      method: "DELETE",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    }).catch((error) => {
      if (error.response) {
        dispatch({
          type: CategoryManagerActions.CATEGORY_MANAGER_ERROR,
          payload: error.response.status.toString(),
        });
      }
    });
  };
};

export const updateCategoryData = () => {
  return async (dispatch: Dispatch<CategoryManagerAction>) => {
    const { accessToken } = store.getState().user;
    const categoryManager = store.getState().categoryManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/category/${categoryManager.id}`,
      method: "PUT",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        ...categoryManager.data,
      },
    }).catch((error) => {
      if (error.response) {
        dispatch({
          type: CategoryManagerActions.CATEGORY_MANAGER_ERROR,
          payload: error.response.status.toString(),
        });
      }
    });
  };
};

export const addCategoryData = () => {
  return async (dispatch: Dispatch<CategoryManagerAction>) => {
    const { accessToken } = store.getState().user;
    const categoryManager = store.getState().categoryManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/category`,
      method: "POST",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        ...categoryManager.data,
      },
    }).catch((error) => {
      if (error.response) {
        dispatch({
          type: CategoryManagerActions.CATEGORY_MANAGER_ERROR,
          payload: error.response.status.toString(),
        });
      }
    });
  };
};
