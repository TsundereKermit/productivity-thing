import { combineReducers } from "redux";
import stickyReducer from "./stickyReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  sticky: stickyReducer,
  error: errorReducer,
  auth: authReducer,
});
