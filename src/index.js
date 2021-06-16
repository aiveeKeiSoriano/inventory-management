import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import RouteWrapper from "./components/RouteWrapper";
import "./index.css";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <RouteWrapper />
  </Provider>,
  document.getElementById("root")
);
