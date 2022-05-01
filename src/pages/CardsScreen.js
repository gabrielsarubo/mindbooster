import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import CustomTextInput from '../components/CustomTextInput'

import { MaterialIcons } from '@expo/vector-icons'
import CustomButton from '../components/CustomButton'

const CardsScreen = ({ route }) => {
  
  // console.log(route.params.collection);
  const cards = [
    { key: 0, front: 'Arvore', back: 'Tree', },
    { key: 1, front: 'Janela', back: 'Window', },
    { key: 2, front: 'Porta', back: 'Door', },
    { key: 3, front: 'Parede', back: 'Wall', },
    { key: 4, front: 'Chão', back: 'Floor', },
    { key: 5, front: 'Cozinha', back: 'Kitchen', },
    { key: 6, front: 'Quarto', back: 'Bedroom', },
    { key: 7, front: 'Cadeira', back: 'Char', },
    { key: 8, front: 'Céu', back: 'Sky', },
    { key: 9, front: 'Arco-iris', back: 'Rainbow', },
    { key: 10, front: 'Planeta', back: 'Planet', },
  ]

  const renderItemCard = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.cardListItem}>
        <View style={styles.wrapperContent}>
          <View style={styles.content}>
            <Text style={styles.label}>Frente</Text>
            <Text style={styles.title} numberOfLines={1}>{item.front}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Verso</Text>
            <Text style={styles.title} numberOfLines={1}>{item.back}</Text>
          </View>
        </View>
        <View style={styles.wrapperButtons}>
          <View style={styles.button}><MaterialIcons name='create' size={28} color='#4472C4' /></View>
          <View style={styles.button}><MaterialIcons name='delete-forever' size={28} color='#E91010' /></View>
        </View>
      </View>
    </TouchableOpacity>
  )
  
  return (
    <View style={styles.container}>
      <View style={styles.filterWrapper}>
        <CustomTextInput
          placeholder='Filtro'
        />
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton title='Jogar' />
      </View>
      
      <FlatList
        data={cards}
        renderItem={renderItemCard}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  // ! CardsScreen styles
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

  // ! CardListItem styles
  cardListItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
  },

  wrapperContent: {
    flexDirection: 'row',
  },

  content: {
    width: 100,
    maxWidth: 100,
    marginRight: 16,
  },

  label: {
    color: '#a5a5a5',
    fontSize: 13,
    letterSpacing: 0,
  },

  title: {
    fontWeight: '700',
    fontSize: 24,
    color: '#27ACA7',
  },

  wrapperButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    marginLeft: 10,
  },

})
 
export default CardsScreen
