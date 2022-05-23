export const createCollection = (collection) => {
  return (dispatch, getStore, { getFirebase, getFirestore }) => {
    // Make async call
    const firestore = getFirestore()
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
