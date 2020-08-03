import { combineReducers } from "redux";
import stickyReducer from "./stickyReducer";

export default combineReducers({
  sticky: stickyReducer,
});
