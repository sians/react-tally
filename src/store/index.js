import { createStore } from 'redux'
import rootReducer from './reducers'

const initializeStore = (initialState = {}) => {
    return createStore(rootReducer, initialState)
}

export default initializeStore