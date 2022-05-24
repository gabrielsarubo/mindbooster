const initialState = {
  collections: []
}

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_COLLECTION':
      console.log(action.collection)
      return state

    case 'CREATE_COLLECTION_ERROR':
      console.log(action.error)
      return state

    case 'SET_COLLECTIONS':
      return {
        ...state,
        collections: action.collections,
      }

    default:
      return state
  }
}

export default collectionReducer
