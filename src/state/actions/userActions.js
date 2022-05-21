export const logUserIn = user => {
  return (dispatch) => {
    dispatch({
      type: 'LOG_USER_IN',
      user: user,
    })
  }
}

export const logUserOut = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOG_USER_OUT',
      user: null,
    })
  }
}
