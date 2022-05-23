import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
// Enhancers
import { devToolsEnhancer } from 'redux-devtools-extension'
// Reducers
import rootReducer from './reducers'

export const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    devToolsEnhancer()
  )
)
