import * as actionTypes from "./actionTypes";

export const panels = () => ({
  types: [
    actionTypes.PANELS,
    actionTypes.PANELS_SUCCESS,
    actionTypes.PANELS_FAIL
  ],
  promise: client => client.get("panels")
});
