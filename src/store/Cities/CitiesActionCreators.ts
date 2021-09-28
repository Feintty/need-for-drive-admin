import { Dispatch } from "redux";
import axios from "axios";
import { CitiesActions } from "./CitiesActions";
import { snackbarOpen } from "../Snackbar/SnackbarActionCreators";
import errorCodeToMessage from "../../utils/errorCodeToMessage";
import { basicHeader } from "../../Api/Headers";
import { CitiesAction } from "./CitiesTypes";

export const fetchCities = () => {
  return async (dispatch: Dispatch<CitiesAction>) => {
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/db/city`,
      method: "GET",
      headers: basicHeader,
    })
      .then((response) => {
        dispatch({
          type: CitiesActions.CITIES_INIT,
          payload: {
            data: response.data.data,
            dataCount: response.data.count,
          },
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: CitiesActions.CITIES_ERROR,
            payload: error.response.status.toString(),
          });
          dispatch(
            snackbarOpen(
              "cities",
              errorCodeToMessage(error.response.status.toString()),
              "error"
            ) as any
          );
        }
      });
  };
};
