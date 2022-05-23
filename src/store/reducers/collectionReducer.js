const initialState = {
  collections: [
    { title: 'Sample Collection', desc: 'A brief description of the collection' }
  ]
}

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_COLLECTION':
      console.log(action.collection)
      return state

    case 'CREATE_COLLECTION_ERROR':
      console.log(action.error)
      return state

    default:
      return state
  }
}

export default collectionReducer
