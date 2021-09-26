import { Dispatch } from "redux";
import axios from "axios";
import { CarsManagerActions } from "./CarsManagerActions";
import store from "../store";
import { CarsManagerAction } from "./CarsManagerTypes";

const carsManagerDataToFormData = () => {
  const { data } = store.getState().carsManager;
  const formData = new FormData();
  formData.append("priceMax", data.priceMax.toString());
  formData.append("priceMin", data.priceMin.toString());
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("categoryId", data.categoryId.id);
  data.colors.forEach((color) => formData.append("colors", color));
  if (data.thumbnail.file) {
    formData.append("thumbnail", data.thumbnail.file as File);
  }
  return formData;
};

export const setCarsManagerData = (data: object) => {
  return (dispatch: Dispatch<CarsManagerAction>) => {
    dispatch({
      type: CarsManagerActions.CARS_MANAGER_CHANGE_DATA,
      payload: data,
    });
  };
};

export const setCarsManagerId = (id: string) => {
  return (dispatch: Dispatch<CarsManagerAction>) => {
    dispatch({
      type: CarsManagerActions.CARS_MANAGER_CHANGE_ID,
      payload: id,
    });
  };
};

export const setCarsManagerDefault = () => {
  return (dispatch: Dispatch<CarsManagerAction>) => {
    dispatch({
      type: CarsManagerActions.CARS_MANAGER_SET_DEFAULT,
    });
  };
};

export const deleteCarsMangerData = () => {
  return async (dispatch: Dispatch<CarsManagerAction>) => {
    const { accessToken } = store.getState().user;
    const carsManager = store.getState().carsManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/car/${carsManager.id}`,
      method: "DELETE",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    }).catch((error) => {
      if (error.response) {
        dispatch({
          type: CarsManagerActions.CARS_MANAGER_ERROR,
          payload: error.response.status.toString(),
        });
      }
    });
  };
};

export const updateCarsManagerData = () => {
  return async (dispatch: Dispatch<CarsManagerAction>) => {
    const { accessToken } = store.getState().user;
    const carsManager = store.getState().carsManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/car/${carsManager.id}`,
      method: "PUT",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
      data: carsManagerDataToFormData(),
    }).catch((error) => {
      if (error.response) {
        dispatch({
          type: CarsManagerActions.CARS_MANAGER_ERROR,
          payload: error.response.status.toString(),
        });
        console.log(error.response);
      }
    });
  };
};

export const addCarsManagerData = () => {
  return async (dispatch: Dispatch<CarsManagerAction>) => {
    const { accessToken } = store.getState().user;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/car`,
      method: "POST",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
      data: carsManagerDataToFormData(),
    }).catch((error) => {
      if (error.response) {
        dispatch({
          type: CarsManagerActions.CARS_MANAGER_ERROR,
          payload: error.response.status.toString(),
        });
      }
    });
  };
};
