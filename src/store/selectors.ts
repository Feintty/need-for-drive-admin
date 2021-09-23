import store from "./store";

export type State = ReturnType<typeof store.getState>;

export const selectUser = (state: State) => state.user;
export const selectAuth = (state: State) => state.auth;
export const selectSnackbar = (state: State) => state.snackbar;
