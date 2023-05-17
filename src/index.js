import React from "react";
import ReactDOM from "react-dom/client";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import App from "./App";

import rootReducer from "./utils/redux";

// 배포 레벨에서는 리덕스 발동시 찍히는 logger를 사용하지 않습니다.
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));

// const store = createStore(rootReducer, enhancer);
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
