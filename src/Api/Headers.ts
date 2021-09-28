import store from "../store/store";

export const authorizationHeader = {
  "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
  Authorization: process.env.REACT_APP_AUTHORIZATION_KEY,
};

export const basicHeader = {
  "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
};

export const basicAuthorizedHeader = () => {
  const { accessToken } = store.getState().user;
  return {
    "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
    Authorization: `Bearer ${accessToken}`,
  };
};
