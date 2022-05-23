import firebase from '../../config/firebase'

export const logUserIn = (email, password) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          // ! If succeeds, dispatch an action of type LOG_USER_IN
          dispatch({
            type: 'LOG_USER_IN',
            payload: {
              userToken: 'dummy-auth-token',
            }
          })
          resolve()
        })
        .catch(error => {
          reject(error)
        })
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
