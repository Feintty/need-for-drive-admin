import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import globalStore from "./store/store";
import App from "./App";
import "./style/global.scss";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
