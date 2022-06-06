import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, Alert, View, StyleSheet } from 'react-native'

import { globalStyles } from '../styles/global'

import CollectionsList from '../components/CollectionsList'
import CustomFloatingButton from '../components/CustomFloatingButton'

// Redux
import { bindActionCreators } from 'redux'
import * as actionCreators from '../store/actions'

const MyCollectionsScreen = ({ navigation }) => {
  // Connect to the Redux store
  const collections = useSelector(state => state.collection.collections)
  const dispatch = useDispatch()
  const { watchCollections, deleteCollection } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    // Listen to real time changes in Firestore and then store them in Redux
    const unsub = watchCollections()

    return () => {
      // Unsubscribe from watchCollections when component unmounts
      unsub()
    }
  }, [])

  const handlePressEdit = ({collectionId, thumbnailUrl}) => {
    navigation.navigate('EditCollection', {
      action: 'edit',
      collectionId,
      thumbnailUrl,
    })
  }

  const handlePressDelete = (collectionId) => {
    Alert.alert(
      'Apagar coleção',
      'Tem certeza que gostaria de apagar esta coleção?',
      [
        { text: 'Cancelar', },
        {
          text: 'Apagar', onPress: () => {
            deleteCollection(collectionId)
              .then(() => {
                console.log('Your collection was successfully deleted!')
              })
              .catch((error) => {
                console.error('Error removing document: ', error)
              })
          }
        }
      ],
      { cancelable: true, },
    )
  }

  return (
    <View style={styles.container}>
      {
        collections.length > 0
          ? (
            <CollectionsList
              data={collections}
              onPressHandler={(collectionId, collectionTitle) => {
                navigation.navigate('Collection', {
                  collectionId,
                  collectionTitle
                })
              }}
              onPressEdit={handlePressEdit}
              onPressDelete={handlePressDelete}
            />
          ) : (
            <View style={globalStyles.infoMessageContainer}>
              <Text style={globalStyles.infoMessage}>Não existe nenhuma coleção ainda.</Text>
            </View>
          )
      }

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
