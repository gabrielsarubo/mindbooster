import { useEffect, useState } from 'react'

import { View, FlatList, StyleSheet } from 'react-native'

import { globalStyles } from '../../styles/global'

import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'
import CustomFloatingButton from '../components/CustomFloatingButton'
import CardListItem from '../components/CardListItem'

const CollectionScreen = ({ navigation, route }) => {

  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [filter, setFilter] = useState('')
  // const [collectionId, setCollectionId] = useState()
  // const [cardId, setCardId] = useState()

  useEffect(() => {
    const cards = route.params.collection.cardsList
    // setCollectionId(route.params.collection.key)
    setCards([...cards])
    setFilteredCards([...cards])
  }, [])

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

  const handlePressEdit = (key) => {
    // setCardId(key)

    // console.log('edit -> cardId collectionId', key, collectionId);
  }

  const handlePressDelete = (key) => {
    // setCardId(key)

    // console.log('delete -> cardId collectionId', key, collectionId);
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
