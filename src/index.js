import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
=======
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
>>>>>>> 792d867909bf8542aab170642137010a02a888d2

import "./index.css";
import App from "./App";

<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from "react-query";

=======
import rootReducer from "./utils/redux";

// 배포 레벨에서는 리덕스 발동시 찍히는 logger를 사용하지 않습니다.
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));

// const store = createStore(rootReducer, enhancer);
const store = createStore(rootReducer);
>>>>>>> 792d867909bf8542aab170642137010a02a888d2

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
<<<<<<< HEAD

    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
=======
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
);
