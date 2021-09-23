import { combineReducers } from "@reduxjs/toolkit";
import AuthorizationReducer from "./Authorization/AuthorizationReducer";
import SnackbarReducer from "./Snackbar/SnackbarReducer";
import UserReducer from "./User/UserReducer";

export const combinedReducers = combineReducers({
  auth: AuthorizationReducer,
  snackbar: SnackbarReducer,
  user: UserReducer,
});

export type RootState = ReturnType<typeof combinedReducers>;
