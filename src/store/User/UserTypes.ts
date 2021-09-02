import { UserActions } from "./UserActions";

export interface IInitialUser {
  accessToken: string;
  refreshToken: string;
  isLogged: boolean;
  error: false | string;
  isLoaded: boolean;
}

export interface IUserLoginSucces {
  type: UserActions.USER_LOGIN_SUCCES;
  payload: { accessToken: string; refreshToken: string };
}

export interface IUserLoginError {
  type: UserActions.USER_LOGIN_ERROR;
}

export interface IUserDefault {
  type: UserActions.USER_DEFAULT;
}

export type UserAction = IUserLoginSucces | IUserLoginError | IUserDefault;
