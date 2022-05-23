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
// Firebase Libs to Connect to Redux
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from '../config/firebase'

export const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig),
    devToolsEnhancer()
  )
)
