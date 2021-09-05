import React from "react";
import Snackbar from "./components/Snackbar/Snackbar";
import snackbarError from "./components/Snackbar/SnackbarErrors";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Routes from "./Routes";

const App = () => {
  const { isLogged, error } = useTypedSelector((state) => state.user);

  const snackbars = () => {
    if (error) {
      return (
        <Snackbar
          snackbarId="snackbar-main"
          type="error"
          message={snackbarError(error)}
        />
      );
    } else if (isLogged) {
      return (
        <Snackbar
          snackbarId="snackbar-main"
          type="success"
          message="Вы успешно вошли!"
        />
      );
    }
  };
  return (
    <div>
      {snackbars()}
      <Routes />
    </div>
  );
};

export default App;
