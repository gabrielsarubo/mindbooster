import firebase from "../../config/firebase"

export const createCollection = (collection) => {
  return (dispatch) => {
    // Reference the Firestore database
    const firestore = firebase.firestore()
    // Make async call
    firestore.collection('collections').add({
      ...collection,
      userId: 'dummy-user-id'
    })
      .then(() => {
        dispatch({
          type: 'CREATE_COLLECTION',
          collection
        })
      })
      .catch(error => {
        dispatch({
          type: 'CREATE_COLLECTION_ERROR',
          error
        })
      })
  }
}
