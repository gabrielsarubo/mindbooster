const initialState = {
  userToken: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_USER_IN':
      return {
        ...state,
        userToken: action.payload.userToken,
      }

    case 'LOG_USER_OUT':
      return {
        ...state,
        userToken: null,
      }

    default:
      return state
  }
}

export default userReducer
