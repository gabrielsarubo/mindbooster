import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
// Icons
import { MaterialIcons } from '@expo/vector-icons'
// Assets
import ThumbnailPlaceholder from '../../assets/placeholder-thumbnail.png'

const CollectionListItem = ({ collection, onPressHandler, onPressEdit, onPressDelete }) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler(collection.id, collection.title)}>
      <View style={styles.collection_list_item}>
        <View style={styles.wrapper_image_title}>
          <View style={styles.wrapper_image}>
            <Image
              source={
                collection?.thumbnailLocalUri
                  ? { uri: collection.thumbnailLocalUri }
                  : ThumbnailPlaceholder
              }
              style={styles.thumbnail}
            />
          </View>
          <View style={styles.wrapper_title}>
            <Text style={styles.title} numberOfLines={1}>{collection.title}</Text>
          </View>
        </View>
        <View style={styles.wrapper_buttons}>
          <TouchableOpacity onPress={() => onPressEdit(collection.key)}>
            <MaterialIcons name='create' size={24} color='#4472C4' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressDelete(collection.key)}>
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
