import React from "react";
import Snackbar from "./components/Snackbar/Snackbar";
import Routes from "./Routes/Routes";

const App = () => {
  return (
    <div>
      <Snackbar snackbarId="snackbar-main" />
      <Routes />
    </div>
  );
};

export default App;
