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
export const selectCategory = (state: State) => state.category;
export const selectCarsManager = (state: State) => state.carsManager;
export const selectCategoryManager = (state: State) => state.categoryManager;
export const selectCitiesManager = (state: State) => state.citiesManager;
export const selectOrdersManager = (state: State) => state.ordersManager;
