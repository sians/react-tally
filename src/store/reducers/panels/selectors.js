import { createSelector } from "reselect";

import { getPanelsEntities } from '../entities/selectors'

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

// export const getPanels = createSelector(
//   (state) => state.panels.panels,
//   getPanelsEntities,
//   (languages, entities) => panels.map((o) => entities[o])
// )

// export const makeGetPanel = () => (
//   createSelector(
//     getPanelsEntities,
//     (_, panelId) => panelId,
//     (entities, id) => entities[id]
//   )
// )