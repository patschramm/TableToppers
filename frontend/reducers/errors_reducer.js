import { combineReducers } from "redux";
import review from "./review_errors_reducer";
import session from "./session_errors_reducer";

export default combineReducers({
  session,
  review,
});
