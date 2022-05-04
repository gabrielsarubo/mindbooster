import { useEffect, useState } from 'react'

import { View, FlatList, StyleSheet } from 'react-native'

import CustomTextInput from '../components/CustomTextInput'

import CustomButton from '../components/CustomButton'
import CardListItem from '../components/CardListItem'

const CollectionScreen = ({ route }) => {

  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const cards = route.params.collection.cardsList
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

  const renderItemCard = ({ item }) => <CardListItem item={item} />

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
        <CustomButton title='Jogar' />
      </View>

      <FlatList
        data={filteredCards}
        renderItem={renderItemCard}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
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
    width: '50%',
    marginBottom: 20,
    marginHorizontal: 'auto',
  },

  // ! FlatList styles
  // TODO try to create a stardard styles for all of the Flatlist
  flatList: {
    paddingBottom: 20,
  },
})

export default CollectionScreen
