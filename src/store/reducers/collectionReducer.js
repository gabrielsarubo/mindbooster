const initialState = {
  collections: []
}

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_COLLECTION':
      return state

    case 'CREATE_COLLECTION_ERROR':
      console.log(action.error)
      return state

    case 'UPDATE_COLLECTION_METADATA':
      const _collections = [...state.collections]

      const indexOfCollection = _collections.findIndex(collection => collection.id === action.collectionId)

      _collections[indexOfCollection] = {...action.metadata}

      return {
        ...state,
        _collections,
      }

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
