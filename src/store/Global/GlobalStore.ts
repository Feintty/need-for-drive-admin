import { createStore } from "@reduxjs/toolkit";
import AuthorizationReducer from "../Authorization/AuthorizationReducer";

const globalStore = createStore(AuthorizationReducer);

export default globalStore;
