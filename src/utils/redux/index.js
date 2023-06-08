// reducers/index.js

/** root reducer */
import { combineReducers } from "redux";
// import counter from "./counter";
import counter from "./counter";
import boardsReducer from "./board";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
  counter,
  boardsReducer,
  login: loginReducer,
});

export default rootReducer;
