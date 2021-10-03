import { Dispatch } from "redux";
import axios from "axios";
import { CitiesManagerActions } from "./CitiesManagerActions";
import { CitiesManagerAction } from "./CitiesManagerTypes";
import store from "../store";
import { snackbarOpen } from "../Snackbar/SnackbarActionCreators";
import errorCodeToMessage from "../../utils/errorCodeToMessage";
import { basicAuthorizedHeader } from "../../Api/Headers";

export const setCitiesManagerData = (data: object) => {
  return (dispatch: Dispatch<CitiesManagerAction>) => {
    dispatch({
      type: CitiesManagerActions.CITIES_MANAGER_CHANGE_DATA,
      payload: data,
    });
  };
};

export const deleteData = () => {
  return async (dispatch: Dispatch<CitiesManagerAction>) => {
    const { data } = store.getState().citiesManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/city/${data.id}`,
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
            type: CitiesManagerActions.CITIES_MANAGER_ERROR,
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

export const updateData = () => {
  return async (dispatch: Dispatch<CitiesManagerAction>) => {
    const { data } = store.getState().citiesManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/city/${data.id}`,
      method: "PUT",
      headers: basicAuthorizedHeader(),
      data: {
        name: data.name,
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
            type: CitiesManagerActions.CITIES_MANAGER_ERROR,
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

export const addData = () => {
  return async (dispatch: Dispatch<CitiesManagerAction>) => {
    const { data } = store.getState().citiesManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/city`,
      method: "POST",
      headers: basicAuthorizedHeader(),
      data: {
        name: data.name,
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
            type: CitiesManagerActions.CITIES_MANAGER_ERROR,
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
