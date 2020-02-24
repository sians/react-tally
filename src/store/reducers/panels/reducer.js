import produce from "immer";

import * as actionTypes from "./actionTypes";

const initialState = {
  panelsLoading: false,
  panels: [],
  panelsError: ""
};

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      // Statistics
      case actionTypes.PANELS:
        draft.panelsLoading = true;
        break;
      case actionTypes.PANELS_SUCCESS:
        draft.panelsLoading = false;
        draft.panels = action.result.data.data_panels;
        break;
      case actionTypes.PANELS_FAIL:
        draft.panelsLoading = false;
        draft.panels = [];
        draft.panelsError = { status: action.error.status };
        break;

      default:
        break;
    }
  });
};

export default reducer;
