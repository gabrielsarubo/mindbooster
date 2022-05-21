export default function userReducer(state = null, action) {
  switch (action.type) {
    case 'LOG_USER_IN':
      return action.user

    case 'LOG_USER_OUT':
      return action.user

    default:
      return state
  }
}
