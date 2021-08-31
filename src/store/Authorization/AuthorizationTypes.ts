import { AuthorizationActions } from "./AutorizationActions";

export interface IInitialUser {
  mail: {
    value: string;
    isCorrect: boolean;
  };
  password: {
    value: string;
    isCorrect: boolean;
  };
  loggedData: null | string | ILoggedData;
}

export interface ILoggedData {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  user_id: string;
}

export interface IAuthorizationLogin {
  type: AuthorizationActions.AUTHORIZATION_LOGIN;
  payload: { loggedData: ILoggedData | string };
}

export interface IAuthorizationChangeMail {
  type: AuthorizationActions.AUTHORIZATION_CHANGE_MAIL;
  payload: { mail: { value: string; isCorrect: boolean } };
}

export interface IAuthorizationChangePassword {
  type: AuthorizationActions.AUTHORIZATION_CHANGE_PASSWORD;
  payload: { password: { value: string; isCorrect: boolean } };
}

export type AuthorizationAction =
  | IAuthorizationLogin
  | IAuthorizationChangeMail
  | IAuthorizationChangePassword;
