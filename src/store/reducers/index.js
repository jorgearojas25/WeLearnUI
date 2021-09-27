import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import reosurcesReducer from "./resourcesReducer";
import coursesReducer from "./coursesReducer";

const rootReducer = combineReducers({ userReducer, coursesReducer, reosurcesReducer });
export default rootReducer;
