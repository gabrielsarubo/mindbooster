import { useContext } from 'react'
import { Alert, View, StyleSheet } from 'react-native'

import { globalStyles } from '../../styles/global'

import CollectionsList from '../components/CollectionsList'
import CustomFloatingButton from '../components/CustomFloatingButton'

import { CollectionContext } from '../contexts/CollectionContext'

const MyCollectionsScreen = ({ navigation }) => {
  // TODO should this be inside the useEffect hook?
  const { collections, deleteCollection } = useContext(CollectionContext)

  const handlePressEdit = (collectionId) => {
    navigation.navigate('EditCollection', {
      action: 'edit',
      collectionId: collectionId,
    })
  }

  const handlePressDelete = (collectionId) => {
    Alert.alert(
      'Apagar coleção',
      'Tem certeza que gostaria de apagar esta coleção?',
      [
        { text: 'Cancelar', },
        { text: 'Apagar', onPress: () => deleteCollection(collectionId) }
      ],
      { cancelable: true, },
    )
  }

  return (
    <View style={styles.container}>
      <CollectionsList
        data={collections}
        onPressHandler={(collection) => {
          navigation.navigate('Collection', {
            collection: collection
          })
        }}
        onPressEdit={handlePressEdit}
        onPressDelete={handlePressDelete}
      />

      <View style={globalStyles.floatingButtonWrapper}>
        <CustomFloatingButton
          onPress={() => navigation.navigate('EditCollection', {
            action: 'create',
          })}
        />
      </View>
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
