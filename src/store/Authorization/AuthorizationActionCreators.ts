import { Dispatch } from "redux";
import { AuthorizationAction } from "./AuthorizationTypes";
import { AuthorizationActions } from "./AutorizationActions";

export const setPassword = (password: string) => {
  return (dispatch: Dispatch<AuthorizationAction>) => {
    dispatch({
      type: AuthorizationActions.AUTHORIZATION_CHANGE_PASSWORD,
      payload: {
        password: { value: password, isCorrect: password.length > 3 },
      },
    });
  };
};

export const setMail = (mail: string) => {
  return (dispatch: Dispatch<AuthorizationAction>) => {
    dispatch({
      type: AuthorizationActions.AUTHORIZATION_CHANGE_MAIL,
      payload: { mail: { value: mail, isCorrect: mail.length > 3 } },
    });
  };
};
