const initialState = {
  collections: []
}

const collectionReducer = (state = initialState, action) => {
  let _collections = []
  
  switch (action.type) {
    case 'CREATE_COLLECTION':
      return state

    case 'CREATE_COLLECTION_ERROR':
      console.log(action.error)
      return state

    case 'UPDATE_COLLECTION_METADATA':
      _collections = [...state.collections]

      const indexOfCollection = _collections.findIndex(collection => collection.id === action.collectionId)

      _collections[indexOfCollection] = {...action.metadata}

      return {
        ...state,
        collections: _collections,
      }

    case 'DELETE_COLLECTION':
      _collections = state.collections.filter(collection => collection.id !== action.collectionId)
      
      return {
        ...state,
        collections: _collections,
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
