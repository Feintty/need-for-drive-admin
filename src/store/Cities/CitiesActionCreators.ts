import { Dispatch } from "redux";
import axios from "axios";
import { CitiesAction } from "./CitiesTypes";
import { CitiesActions } from "./CitiesActions";
import { basicHeader } from "../../Api/Headers";

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
        }
      });
  };
};
