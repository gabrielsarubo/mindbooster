import firebase from '../../config/firebase'

export const logUserIn = (email, password) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          const { user } = userCredential
          // Get a JSON Web Token (JWT) used to identify the user to a Firebase service
          user.getIdToken()
            .then(token => {
              // ! If succeeds, dispatch an action of type LOG_USER_IN
              dispatch({
                type: 'LOG_USER_IN',
                payload: {
                  userToken: token,
                  uid: user.uid
                }
              })
              resolve()
            })
            .catch(error => {
              reject(error)
            })
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export const signUp = (email, password) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          const { user } = userCredential
          // Get a JSON Web Token (JWT) used to identify the user to a Firebase service
          user.getIdToken()
            .then(token => {
              // ! If succeeds, dispatch an action of type SIGN_UP
              dispatch({
                type: 'SIGN_UP',
                payload: {
                  userToken: token,
                  uid: user.uid
                }
              })
              resolve()
            })
            .catch(error => {
              reject(error)
            })
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
    dispatch({
      type: 'CLEAR_COLLECTIONS_STATE'
    })
  }
}
