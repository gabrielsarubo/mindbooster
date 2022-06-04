import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../store/actions'
import { Text, Alert, View, FlatList, StyleSheet } from 'react-native'

import { globalStyles } from '../styles/global'

import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'
import CustomFloatingButton from '../components/CustomFloatingButton'
import CardListItem from '../components/CardListItem'

const CollectionScreen = ({ navigation, route }) => {
  // Redux store and actions
  const collections = useSelector(state => state.collection.collections)
  const dispatch = useDispatch()
  const { deleteCard } = bindActionCreators(actionCreators, dispatch)

  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [filter, setFilter] = useState('')

  const [collectionId, setCollectionId] = useState()

  useEffect(() => {
    // Recover the cards from the Collection state in Redux using the collection ID
    const collectionId = route.params?.collectionId
    setCollectionId(collectionId)

    const _collection = collections.find(collection => collection.id === collectionId)

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

  const handlePressEdit = (cardId) => {
    navigation.navigate('EditCard', {
      action: 'edit',
      cardId: cardId,
      collectionId: collectionId
    })
  }

  const handlePressDelete = (cardId) => {
    Alert.alert(
      'Apagar cartão',
      'Tem certeza que gostaria de apagar este cartão?',
      [
        { text: 'Cancelar', },
        { text: 'Apagar', onPress: () => deleteCard(collectionId, cardId) }
      ],
      { cancelable: true, },
    )
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

      {
        cards.length > 0
          ? (
            <FlatList
              data={filteredCards}
              renderItem={renderItemCard}
              keyExtractor={(item, index) => index}
              style={styles.flatList}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View style={globalStyles.infoMessageContainer}>
              <Text style={globalStyles.infoMessage}>Não existe nenhum flashcard ainda.</Text>
            </View>
          )
      }

      <View style={globalStyles.floatingButtonWrapper}>
        <CustomFloatingButton
          onPress={() => navigation.navigate('EditCard', {
            action: 'create',
            collectionId: collectionId
          })}
        />
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
