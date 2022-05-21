import { combineReducers } from "redux"
// Reducers
import userReducer from "./userReducer"

// Export all the reducers as the default
export default combineReducers({
  user: userReducer
})
