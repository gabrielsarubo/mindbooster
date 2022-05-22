export const logUserIn = user => {
  return (dispatch) => {
    dispatch({
      type: 'LOG_USER_IN',
      payload: {
        isSignedIn: true,
        email: user.email,
        username: user.displayName,
      }
    })
  }
}

export const logUserOut = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOG_USER_OUT',
    })
  }
}
