import { Dispatch } from "redux";
import axios from "axios";
import { CitiesManagerActions } from "./CitiesManagerActions";
import { CitiesManagerAction } from "./CitiesManagerTypes";
import store from "../store";

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
    const { accessToken } = store.getState().user;
    const { data } = store.getState().citiesManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/city/${data.id}`,
      method: "DELETE",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    }).catch((error) => {
      if (error.response) {
        dispatch({
          type: CitiesManagerActions.CITIES_MANAGER_ERROR,
          payload: error.response.status.toString(),
        });
      }
    });
  };
};

export const updateData = () => {
  return async (dispatch: Dispatch<CitiesManagerAction>) => {
    const { accessToken } = store.getState().user;
    const { data } = store.getState().citiesManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/city/${data.id}`,
      method: "PUT",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        name: data.name,
      },
    }).catch((error) => {
      if (error.response) {
        dispatch({
          type: CitiesManagerActions.CITIES_MANAGER_ERROR,
          payload: error.response.status.toString(),
        });
      }
    });
  };
};

export const addData = () => {
  return async (dispatch: Dispatch<CitiesManagerAction>) => {
    const { accessToken } = store.getState().user;
    const { data } = store.getState().citiesManager;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/city`,
      method: "POST",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        name: data.name,
      },
    }).catch((error) => {
      if (error.response) {
        dispatch({
          type: CitiesManagerActions.CITIES_MANAGER_ERROR,
          payload: error.response.status.toString(),
        });
      }
    });
  };
};
