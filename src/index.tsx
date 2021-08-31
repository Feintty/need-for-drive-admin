import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import globalStore from "./store/Global/GlobalStore";
import App from "./App";
import "./style/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
