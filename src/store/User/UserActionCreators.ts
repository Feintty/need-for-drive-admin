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
        baseURL: "https://api-factory.simbirsoft1.com/api/auth/login",
        method: "POST",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
          Authorization: "Basic MTJoN2MyZjo0Y2JjZWE5NmRl",
          "Content-Type": "application/json",
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
