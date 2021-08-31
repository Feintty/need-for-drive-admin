import { combineReducers } from "@reduxjs/toolkit";
import AuthorizationReducer from "./Authorization/AuthorizationReducer";

export const combinedReducers = combineReducers({ auth: AuthorizationReducer });

export type RootState = ReturnType<typeof combinedReducers>;
