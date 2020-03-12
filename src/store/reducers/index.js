import { combineReducers } from "redux";

// import auth from "./auth";
import panels from "./panels";
import entities from "./entities";

export default combineReducers({
    entities,
    panels
});