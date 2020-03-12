import { createSelector } from 'reselect'

export const getPanelsEntities = createSelector([
    (state) => state.entities.panels,
],
    (entities) => entities
)