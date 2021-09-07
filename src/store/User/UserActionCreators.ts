import { Dispatch } from "redux";
import { UserAction } from "./UserTypes";
import { UserActions } from "./UserActions";
import cookies from "react-cookies";
import axios from "axios";
import { snackbarOpen } from "../Snackbar/SnackbarActionCreators";
import errorCodeToMessage from "../../utils/errorCodeToMessage";

export const login = (mail: string, password: string) => {
  return async (dispatch: Dispatch<any>) => {
    await dispatch({ type: UserActions.USER_DEFAULT });
    await axios({
      baseURL: `${process.env.REACT_APP_API_URL}/auth/login/`,
      method: "POST",
      data: {
        username: mail,
        password: password,
      },
      headers: {
        "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        Authorization: process.env.REACT_APP_AUTHORIZATION_KEY,
      },
    })
      .then((response) => {
        dispatch(snackbarOpen("snackbar-main", "Вы успешно вошли", "success"));
        cookies.save(
          "userData",
          {
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
          },
          { path: "/", maxAge: 9999999, secure: true }
        );
        dispatch({
          type: UserActions.USER_LOGIN_SUCCES,
          payload: {
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UserActions.USER_LOGIN_ERROR,
          payload: { error: error.response.status.toString() },
        });
        dispatch(
          snackbarOpen(
            "snackbar-main",
            errorCodeToMessage(error.response.status.toString()),
            "error"
          )
        );
      });
  };
};

export const checkIsUserExists = () => {
  return (dispatch: Dispatch<UserAction>) => {
    const userData = cookies.load("userData");

    if (userData) {
      const { refreshToken, accessToken } = userData;
      dispatch({
        type: UserActions.USER_LOGIN_SUCCES,
        payload: {
          accessToken,
          refreshToken,
        },
      });
    }
  };
};

export const exitUser = () => {
  return (dispatch: Dispatch<UserAction>) => {
    cookies.remove("userData", { path: "/" });
    dispatch({
      type: UserActions.USER_DEFAULT,
    });
  };
};