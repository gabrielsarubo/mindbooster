import { useEffect, useState, useContext } from 'react'

import { View, FlatList, StyleSheet } from 'react-native'

import { globalStyles } from '../../styles/global'

import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'
import CustomFloatingButton from '../components/CustomFloatingButton'
import CardListItem from '../components/CardListItem'

import { CollectionContext } from '../contexts/CollectionContext'

const CollectionScreen = ({ navigation, route }) => {
  const { collections, deleteCard } = useContext(CollectionContext)

  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [filter, setFilter] = useState('')

  const [collectionKey, setCollectionKey] = useState()

  useEffect(() => {
    // Recover the cards from the CollectionContext using the collection key
    const _collectionKey = route.params.collection.key
    setCollectionKey(_collectionKey)

    const _collection = collections.find(collection => collection.key === _collectionKey)

    setCards([..._collection.cardsList])
    setFilteredCards([..._collection.cardsList])
  }, [collections])

  const handleChangeText = (value) => {
    setFilter(value)

    const filteredCards = cards.filter(card => {
      return card.front
        .toLowerCase()
        .includes(value.toLowerCase())
        || card.back
          .toLowerCase()
          .includes(value.toLowerCase())
    })

    setFilteredCards(filteredCards)
  }

  const handlePressEdit = (key) => {}

  const handlePressDelete = (key) => {
    deleteCard(collectionKey, key)
  }

  const renderItemCard = ({ item }) => (
    <CardListItem
      item={item}
      onPressEdit={handlePressEdit}
      onPressDelete={handlePressDelete}
    />
  )

  return (
    <View style={styles.container}>
      <View style={styles.filterWrapper}>
        <CustomTextInput
          value={filter}
          onChangeText={handleChangeText}
          placeholder='Filtro'
        />
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton
          title='Jogar'
          type='play'
          onPress={() => {
            navigation.navigate('Play', {
              cards: cards
            })
          }}
        />
      </View>

      <FlatList
        data={filteredCards}
        renderItem={renderItemCard}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      />

      <View style={globalStyles.floatingButtonWrapper}>
        <CustomFloatingButton onPress={() => navigation.navigate('EditCard', { action: 'create' })} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // ! CollectionScreen styles
  container: {
    flex: 1,
    backgroundColor: '#332e56',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  filterWrapper: {
    marginBottom: 4,
  },

  buttonWrapper: {
    marginBottom: 20,
    alignItems: 'center',
  },

  // ! FlatList styles
  // TODO try to create a stardard styles for all of the Flatlist
  flatList: {
    paddingBottom: 20,
  },
})

export default CollectionScreen
