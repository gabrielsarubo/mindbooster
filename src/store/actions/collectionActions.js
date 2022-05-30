import firebaseApp from "firebase/app"
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
          cardsList: [],
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

export const updateCollectionMetada = (collectionId, metadata, uri = null) => {
  return (dispatch) => {
    // Reference the Firestore database and Storage
    const firestore = firebase.firestore()
    const storage = firebase.storage()

    const collectionRef = firestore.collection('collections').doc(collectionId)

    // If user changed image, upload the new image to Storage
    // and then update collection doc in Firestore
    if (uri != null) {
      const storageRef = storage.ref(`images/${uri.filename}`)
      storageRef.putString(uri.uri, 'data_url', { contentType: 'image/png' })
        .then(() => {
          collectionRef.update({
            ...metadata,
            thumbnail: uri.filename,
          })
            .then(() => {
              dispatch({
                type: 'UPDATE_COLLECTION_METADATA',
                metadata,
              })
            })
            .catch((error) => {
              console.error('Error updating document: ', error)
            })
        })
        .catch((error) => {
          console.error('Error updating thumbnail: ', error)
        })
    } else {
      collectionRef.update({
        ...metadata,
      })
        .then(() => {
          dispatch({
            type: 'UPDATE_COLLECTION_METADATA',
            metadata,
          })
        })
        .catch((error) => {
          console.error('Error updating document: ', error)
        })
    }
  }
}

export const deleteCollection = (collectionId) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      // Reference Firestore database
      const firestore = firebase.firestore()
      // Reference document
      const collectionRef = firestore.collection('collections')
      // Delete document
      collectionRef.doc(collectionId).delete()
        .then(() => {
          dispatch({
            type: 'DELETE_COLLECTION',
            collectionId,
          })
          resolve()
        })
        .catch((error) => {
          reject(error)
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

/**
 * Create a new flashcard inside a given collection
 * 
 */
export const createCard = (collectionId, card) => (dispatch) => {
  const firestore = firebase.firestore()

  // Reference the doc in Firestore
  const docRef = firestore.collection('collections').doc(collectionId)

  // Make async call to Firebase Firestore
  docRef.update({
    cardsList: firebaseApp.firestore.FieldValue.arrayUnion(card)
  })
    .then(() => {
      console.log('Flashcard added to the cards list inside the collection doc!')
    })
    .catch(error => {
      console.error('Failed to add new flashcard: ', error)
    })
}
