import { Dispatch } from "redux";
import axios from "axios";
import { CarsAction } from "./CarsTypes";
import { CarsActions } from "./CarsActions";
import { basicHeader } from "../../Api/Headers";

export const fetchCars = () => {
  return async (dispatch: Dispatch<CarsAction>) => {
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
        }
      });
  };
};
