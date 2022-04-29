import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'

import CollectionsList from '../components/CollectionsList'

const data_myCollections = [
  { key: 0, title: 'Objetos', thumbnail: 'ball' },
  { key: 1, title: 'Cores', thumbnail: 'colors' },
  { key: 2, title: 'Animais', thumbnail: 'animals' },
  { key: 3, title: 'Adjetivos', thumbnail: 'adjectives' },
  { key: 4, title: 'Pronomes', thumbnail: 'pronouns' },
]

const MyCollectionsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CollectionsList data={data_myCollections} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#332e56',
  },
})
 
export default MyCollectionsScreen
