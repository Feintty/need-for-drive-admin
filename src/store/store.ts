import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { combinedReducers } from "./reducersCombiner";

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;
