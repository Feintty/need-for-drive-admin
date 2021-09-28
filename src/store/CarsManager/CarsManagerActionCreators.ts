import { Dispatch } from "redux";
import axios from "axios";
import { CarsManagerActions } from "./CarsManagerActions";
import store from "../store";
import { CarsManagerAction } from "./CarsManagerTypes";
import { basicAuthorizedHeader } from "../../Api/Headers";
import { snackbarOpen } from "../Snackbar/SnackbarActionCreators";
import errorCodeToMessage from "../../utils/errorCodeToMessage";
import { flatObject } from "../../utils/flatObject";

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
    const carsManager = store.getState().carsManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/car/${carsManager.id}`,
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
            type: CarsManagerActions.CARS_MANAGER_ERROR,
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

export const updateCarsManagerData = () => {
  return async (dispatch: Dispatch<CarsManagerAction>) => {
    const carsManager = store.getState().carsManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/car/${carsManager.id}`,
      method: "PUT",
      headers: {
        ...basicAuthorizedHeader(),
        "Content-Type": "multipart/form-data",
      },
      data: carsManagerDataToFormData(),
    })
      .then(() => {
        dispatch(
          snackbarOpen("admin", "Операция выполнена успешно!", "success") as any
        );
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: CarsManagerActions.CARS_MANAGER_ERROR,
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

export const addCarsManagerData = () => {
  return async (dispatch: Dispatch<CarsManagerAction>) => {
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/car`,
      method: "POST",
      headers: {
        ...basicAuthorizedHeader(),
        "Content-Type": "multipart/form-data",
      },
      data: carsManagerDataToFormData(),
    })
      .then(() => {
        dispatch(
          snackbarOpen("admin", "Операция выполнена успешно!", "success") as any
        );
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: CarsManagerActions.CARS_MANAGER_ERROR,
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

export const calculateProgress = (isNewCar: boolean) => {
  const { data } = store.getState().carsManager;
  const flatData = flatObject(data);
  const fields: Array<boolean> = [];
  Object.entries(flatData).forEach(([key, value]) => {
    switch (key) {
      case "colors":
        fields.push(Array.isArray(value) && value.length > 0);
        break;
      case "file":
        fields.push(isNewCar ? !!value : true);
        break;
      default:
        fields.push(!!value);
    }
  });
  const count = fields.length;
  const correctCount = fields.filter((value) => !!value).length;
  return Math.ceil((correctCount / count) * 100);
};
