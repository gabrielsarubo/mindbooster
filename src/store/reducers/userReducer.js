const initialState = {
  userToken: null,
  uid: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_USER_IN':
      return {
        ...state,
        userToken: action.payload.userToken,
        uid: action.payload.uid,
      }

    case 'SIGN_UP':
      return {
        ...state,
        userToken: action.payload.userToken,
        uid: action.payload.uid,
      }

    case 'LOG_USER_OUT':
      return {
        ...state,
        userToken: null,
        uid: null,
      }

    default:
      return state
  }
}

export default userReducer
