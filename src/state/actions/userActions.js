export const logUserIn = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOG_USER_IN',
      payload: {
        userToken: 'dummy-auth-token',
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
