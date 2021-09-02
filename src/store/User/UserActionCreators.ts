import { Dispatch } from "redux";
import { UserAction } from "./UserTypes";
import { UserActions } from "./UserActions";
import axios from "axios";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const login = (mail: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    await dispatch({ type: UserActions.USER_DEFAULT });
    try {
      const response = await axios({
        baseURL: `${process.env.REACT_APP_API_URL}/auth/login`,
        method: "POST",
        headers: {
          "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
          Authorization: process.env.REACT_APP_AUTHORIZATION_KEY,
          "Content-Type": process.env.REACT_APP_CONTENT_TYPE,
        },
        data: {
          username: mail,
          password: password,
        },
      });
      dispatch({
        type: UserActions.USER_LOGIN_SUCCES,
        payload: {
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
        },
      });
    } catch {
      dispatch({ type: UserActions.USER_LOGIN_ERROR });
    }
  };
};
