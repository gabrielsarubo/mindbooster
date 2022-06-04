import { combineReducers } from "redux"
// Reducers
import userReducer from "./userReducer"
import collectionReducer from './collectionReducer'

// Export all the reducers as the default
export default combineReducers({
  user: userReducer,
  collection: collectionReducer,
})
