import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'

// Icons
import { MaterialIcons } from '@expo/vector-icons'

const CollectionListItem = ({ collection, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler(collection)}>
      <View style={styles.collection_list_item}>
        <View style={styles.wrapper_image_title}>
          <View style={styles.wrapper_image}>
            <Image source={{ uri: collection.thumbnailLocalUri, width: 75, height: 75, }} />
          </View>
          <View style={styles.wrapper_title}>
            <Text style={styles.title}>{collection.title}</Text>
          </View>
        </View>
        <View style={styles.wrapper_buttons}>
          <View><MaterialIcons name='create' size={24} color='#4472C4' /></View>
          <View><MaterialIcons name='delete-forever' size={24} color='#E91010' /></View>
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

  image: {},

  wrapper_title: {
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
