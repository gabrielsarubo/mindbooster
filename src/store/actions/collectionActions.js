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
          .then(res => {
            // res corresponds to the newly created doc in Firestore
            // get res.id and store in the new collection Object
            collection.id = res.id
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

export const watchCollections = () => {
  return (dispatch, getState) => {
    const { user } = getState()

    // Reference the Firestore database
    const firestore = firebase.firestore()

    // Create a query snapshot to listen to multiple docs in a collection
    firestore
      .collection('collections')
      .where('userId', '==', user.uid)
      .onSnapshot(querySnapshot => {
        const collections = []
        querySnapshot.forEach(doc => {
          // doc.data() returns an Object containing all fields in the document
          const docData = doc.data()
          const collection = {
            id: doc.id,
            ...docData
          }
          collections.push(collection)
        })
        dispatch({
          type: 'SET_COLLECTIONS',
          collections
        })
      })
  }
}
