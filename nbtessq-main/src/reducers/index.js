import {combineReducers} from "redux"
import ssqReducer from "./ssqReducer";

import securityReducer from "./securityReducer";


export default combineReducers({
  ssq:ssqReducer,
  security:securityReducer
});
