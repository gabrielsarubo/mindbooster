import firebase from "../../config/firebase"

export const createCollection = (collection, {uri, filename}) => {
  return (dispatch, getState) => {
    const { user } = getState()
    
    // Reference the Firestore database and Storage
    const firestore = firebase.firestore()
    const storage = firebase.storage()

    // Make async call to Firebase Storage
    storage.ref(`images/${filename}`).putString(uri, 'data_url', { contentType: 'image/png'})
      .then(() => {
        // Make async call to Firebase Firestore
        firestore.collection('collections').add({
          ...collection,
          userId: user.uid,
          createAt: new Date(),
          thumbnail: filename,
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
      })
      .catch(error => {
        dispatch({
          type: 'CREATE_COLLECTION_ERROR',
          error
        })
      })
  }
}
