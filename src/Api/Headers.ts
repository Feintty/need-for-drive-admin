export const authorizationHeader = {
  "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
  Authorization: process.env.REACT_APP_AUTHORIZATION_KEY,
};

export const basicHeader = {
  "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
};
