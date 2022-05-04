import { View, StyleSheet } from 'react-native'

import CollectionsList from '../components/CollectionsList'

const data_myCollections = [
  { key: 0, title: 'Objetos', thumbnail: 'ball', cardsList: [{ key: 0, front: 'Arvore', back: 'Tree', }, { key: 1, front: 'Janela', back: 'Window', },] },
  { key: 1, title: 'Cores', thumbnail: 'colors', cardsList: [{ key: 0, front: 'Vermelho', back: 'Red', }, { key: 1, front: 'Laranja', back: 'Orange', }, { key: 2, front: 'Amarelo', back: 'Yellow', }, { key: 3, front: 'Verde', back: 'Green', }, { key: 4, front: 'Azul', back: 'Blue', }, { key: 5, front: 'Indigo', back: 'Indigo', },] },
  { key: 2, title: 'Animais', thumbnail: 'animals', cardsList: [{ key: 0, front: 'Cavalo', back: 'Horse', }, { key: 1, front: 'Rato', back: 'Mouse', },] },
  { key: 3, title: 'Adjetivos', thumbnail: 'adjectives', cardsList: [{ key: 0, front: 'Inefável', back: 'Inefable', }, { key: 1, front: 'Bonito', back: 'Pretty', },] },
  { key: 4, title: 'Pronomes', thumbnail: 'pronouns', cardsList: [{ key: 0, front: 'Eles/elas', back: 'They', }, { key: 1, front: 'Nós', back: 'We', },] },
]

const MyCollectionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CollectionsList
        data={data_myCollections}
        onPressHandler={(collection) => {
          navigation.navigate('Collection', {
            collection: collection
          })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#332e56',
  },
})
 
export default MyCollectionsScreen
