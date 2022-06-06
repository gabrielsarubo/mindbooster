import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
// Icons
import { MaterialIcons } from '@expo/vector-icons'
// Assets
import ThumbnailPlaceholder from '../../assets/placeholder-thumbnail.png'
import { useState, useEffect } from 'react'

import firebase from '../config/firebase'

const CollectionListItem = ({ collection, onPressHandler, onPressEdit, onPressDelete }) => {
  const [url, setUrl] = useState()

  useEffect(() => {
    let _isMounted = true

    // Get thumbnail from Firebase Storage
    const storage = firebase.storage()
    storage.ref(`images/${collection.thumbnail}`)
      .getDownloadURL()
      .then(url => {
        if (_isMounted) {
          setUrl(url)
        }
      })
      .catch(error => {
        console.log(error)
      })

    // Cleanup function
    return () => {
      _isMounted = false
    }
  }, [collection])

  return (
    <TouchableOpacity onPress={() => onPressHandler(collection.id, collection.title)}>
      <View style={styles.collection_list_item}>
        <View style={styles.wrapper_image_title}>
          <View style={styles.wrapper_image}>
            <Image
              source={{ uri: url }}
              defaultSource={ ThumbnailPlaceholder }
              style={styles.thumbnail}
            />
          </View>
          <View style={styles.wrapper_title}>
            <Text style={styles.title} numberOfLines={1}>{collection.title}</Text>
          </View>
        </View>
        <View style={styles.wrapper_buttons}>
          <TouchableOpacity onPress={() => onPressEdit({
            collectionId: collection.id,
            thumbnailUrl: url,
          })}>
            <MaterialIcons name='create' size={24} color='#4472C4' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressDelete(collection.id)}>
            <MaterialIcons name='delete-forever' size={24} color='#E91010' />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  collection_list_item: {
    padding: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    backgroundColor: 'white',
  },

  wrapper_image_title: {
    flexDirection: 'row',
  },

  wrapper_image: {
    padding: 8,
    marginRight: 8,
  },

  thumbnail: {
    width: 75,
    height: 75,
    borderRadius: 75,
  },

  wrapper_title: {
    maxWidth: 180,
    justifyContent: 'center',
  },

  title: {
    fontWeight: '700',
    fontSize: 28,
    color: '#27ACA7',
  },

  wrapper_buttons: {
    padding: 8,
    justifyContent: 'space-between',
  },
})

export default CollectionListItem
