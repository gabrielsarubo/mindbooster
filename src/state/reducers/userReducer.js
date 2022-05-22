const initialState = {
  isSignedIn: false,
  email: null,
  username: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_USER_IN':
      return {
        ...state,
        isSignedIn: action.payload.isSignedIn,
        email: action.payload.email,
        username: action.payload.username,
      }

    case 'LOG_USER_OUT':
      return {
        ...state,
        isSignedIn: false,
        email: null,
        username: null,
      }

    default:
      return state
  }
}

export default userReducer
