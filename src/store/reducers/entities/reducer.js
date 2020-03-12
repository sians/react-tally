import produce from 'immer'

import * as actionTypes from './actionTypes'
import {
    PANELS_SUCCESS
} from '../panels/actionTypes'

const initialState = {
    panels: {},
    tasks: {}
}

const normalizeArray = (arr) => {
    const normalized = {}
    Object.keys(arr).forEach((key) => {
      const { id, attributes, relationships } = arr[key]
  
      const relationshipsAttributes = {}
      if (relationships) {
        Object.keys(relationships).forEach((key) => {
          const relationship = relationships[key].data
          if (relationship) {
            relationshipsAttributes[key] = relationship instanceof Array ? relationship.map((a) => a.id) : relationship.id
          }
        })
      }
  
      normalized[id] = { id, ...attributes, ...relationshipsAttributes }
    })
  
    return normalized
  }

  const updateEntitiesData = (state, draft, entity, dataKey, data) => {
    const entityData = data[dataKey]
  
    if (entityData) {
      draft[entity] = {
        ...state[entity],
        ...normalizeArray(entityData)
      }
    }
  }

  const reducer = (state = initialState, action = {}) => {
      return produce(state, draft => {
          switch (action.type) {
                case PANELS_SUCCESS:
                    const data = action.restult.normalizedData
                    updateEntitiesData(state, draft, 'panels', 'panel', data)
                    break

                case actionTypes.RESET:
                    draft.entities = initialState.entities
                    break
                    
                default:
                    break;
          }
      })
  }