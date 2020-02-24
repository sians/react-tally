import { createSelector } from "reselect";

export const getPanelsLoading = createSelector(
  [state => state.panels.panelsLoading],
  loading => loading
);

export const getPanels = createSelector(
  [state => state.panels.panels],
  panels => panels
);

export const getPanelsError = createSelector(
  [state => state.panels.panelsError],
  error => error
);
