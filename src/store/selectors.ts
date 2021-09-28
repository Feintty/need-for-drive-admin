import store from "./store";

export type State = ReturnType<typeof store.getState>;

export const selectUser = (state: State) => state.user;
export const selectAuth = (state: State) => state.auth;
export const selectSnackbar = (state: State) => state.snackbar;
export const selectSidebar = (state: State) => state.sidebar;
export const selectPagesBar = (state: State) => state.pages;
export const selectOrders = (state: State) => state.orders;
export const selectFilter = (state: State) => state.filter;
export const selectCities = (state: State) => state.cities;
export const selectCars = (state: State) => state.cars;
