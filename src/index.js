import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";

// Redux
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store({})}>
    <BrowserRouter>
      <SoftUIControllerProvider>
        <App />
      </SoftUIControllerProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
