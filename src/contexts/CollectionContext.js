import { createContext, useState } from 'react'

export const CollectionContext = createContext()

const CollectionContextProvider = (props) => {
  const [collections, setCollections] = useState([
    { key: 0, title: 'Objetos', thumbnail: 'ball', cardsList: [{ key: 0, front: 'Arvore', back: 'Tree', }, { key: 1, front: 'Janela', back: 'Window', },] },
    { key: 1, title: 'Cores', thumbnail: 'colors', cardsList: [{ key: 0, front: 'Vermelho', back: 'Red', }, { key: 1, front: 'Laranja', back: 'Orange', }, { key: 2, front: 'Amarelo', back: 'Yellow', }, { key: 3, front: 'Verde', back: 'Green', }, { key: 4, front: 'Azul', back: 'Blue', }, { key: 5, front: 'Indigo', back: 'Indigo', },] },
    { key: 2, title: 'Animais', thumbnail: 'animals', cardsList: [{ key: 0, front: 'Cavalo', back: 'Horse', }, { key: 1, front: 'Rato', back: 'Mouse', },] },
    { key: 3, title: 'Adjetivos', thumbnail: 'adjectives', cardsList: [{ key: 0, front: 'Inefável', back: 'Inefable', }, { key: 1, front: 'Bonito', back: 'Pretty', },] },
    { key: 4, title: 'Pronomes', thumbnail: 'pronouns', cardsList: [{ key: 0, front: 'Eles/elas', back: 'They', }, { key: 1, front: 'Nós', back: 'We', },] },
  ])

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
    <CollectionContext.Provider value={{ collections, editCard, deleteCard }}>
      {props.children}
    </CollectionContext.Provider>
  )
}

export default CollectionContextProvider
