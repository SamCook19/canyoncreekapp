import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app.js";
import reducers from "./reducers";

import history from './history.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)} >
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>,
    
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
