// reducers/index.js

/** root reducer */
import { combineReducers } from "redux";
// import counter from "./counter";
import counter from "./counter";
import boardsReducer from "./board";

const rootReducer = combineReducers({
  counter,
  boardsReducer,
});

export default rootReducer;
