import { Dispatch } from "redux";
import axios from "axios";
import { CarsAction } from "./CarsTypes";
import { CarsActions } from "./CarsActions";
import store from "../store";
import errorCodeToMessage from "../../utils/errorCodeToMessage";
import { snackbarOpen } from "../Snackbar/SnackbarActionCreators";
import { basicHeader } from "../../Api/Headers";

export const fetchCars = () => {
  return async (dispatch: Dispatch<any>) => {
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/car`,
      method: "GET",
      headers: basicHeader,
    })
      .then((response) => {
        dispatch({
          type: CarsActions.CARS_INIT,
          payload: {
            data: response.data.data,
            dataCount: response.data.count,
          },
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: CarsActions.CARS_ERROR,
            payload: error.response.status.toString(),
          });
          dispatch(
            snackbarOpen(
              "cars",
              errorCodeToMessage(error.response.status.toString()),
              "error"
            )
          );
        }
      });
  };
};

export const fetchCarsFiltered = (count: number, page: number) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({
      type: CarsActions.CARS_DROP_FILTERED_DATA,
    });
    const { filter } = store.getState().cars;
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/car?limit=${count}&page=${page}${filter}`,
      method: "GET",
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
      },
    })
      .then((response) => {
        dispatch({
          type: CarsActions.CARS_INIT_FILTERED,
          payload: {
            dataFiltered: response.data.data,
            dataCount: response.data.count,
          },
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: CarsActions.CARS_ERROR,
            payload: error.response.status.toString(),
          });
          dispatch(
            snackbarOpen(
              "cars",
              errorCodeToMessage(error.response.status.toString()),
              "error"
            )
          );
        }
      });
  };
};

export const setCarsFilter = (currentFilter: string) => {
  return (dispatch: Dispatch<CarsAction>) => {
    dispatch({
      type: CarsActions.CARS_SET_FILTER,
      payload: currentFilter,
    });
  };
};