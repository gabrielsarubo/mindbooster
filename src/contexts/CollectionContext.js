import { createContext, useState } from 'react'

export const CollectionContext = createContext()

const CollectionContextProvider = (props) => {
  const [collections, setCollections] = useState([
    { key: 0, title: 'Cores', thumbnailLocalUri: 'https://www.freeiconspng.com/uploads/soccer-ball-icon-11.png', cardsList: [{ key: 0, front: 'Vermelho', back: 'Red', }, { key: 1, front: 'Laranja', back: 'Orange', }, { key: 2, front: 'Amarelo', back: 'Yellow', }, { key: 3, front: 'Verde', back: 'Green', }, { key: 4, front: 'Azul', back: 'Blue', }, { key: 5, front: 'Indigo', back: 'Indigo', },] },
    { key: 1, title: 'Animais', thumbnailLocalUri: 'https://www.freeiconspng.com/uploads/soccer-ball-icon-11.png', cardsList: [{ key: 0, front: 'Cavalo', back: 'Horse', }, { key: 1, front: 'Rato', back: 'Mouse', },] },
  ])

  const createCollection = (newCollection) => {
    const _collections = [...collections]

    _collections.push(newCollection)

    setCollections(_collections)
  }

  const createCard = (collectionKey, newCard) => {
    const _collections = [...collections]

    const indexOfCollection = collections.findIndex(collection => collection.key === collectionKey)

    _collections[indexOfCollection].cardsList.push(newCard)

    setCollections(_collections)
  }

  const editCard = (collectionKey, cardKey, newCard) => {
    const _collections = [...collections]

    const indexOfCollection = collections.findIndex(collection => collection.key === collectionKey)
    const indexOfCard = collections[indexOfCollection].cardsList.findIndex(card => card.key === cardKey)

    _collections[indexOfCollection].cardsList[indexOfCard] = newCard

    setCollections(_collections)
  }

  const deleteCard = (collectionKey, cardKey) => {
    const _collections = [...collections]

    const indexOfCollection = collections.findIndex(collection => collection.key === collectionKey)
    const indexOfCard = collections[indexOfCollection].cardsList.findIndex(card => card.key === cardKey)

    _collections[indexOfCollection].cardsList.splice(indexOfCard, 1)

    setCollections(_collections)
  }

  return (
    <CollectionContext.Provider value={{ collections, createCollection, createCard, editCard, deleteCard }}>
      {props.children}
    </CollectionContext.Provider>
  )
}

export default CollectionContextProvider
